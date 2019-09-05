import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireList, AngularFireObject, AngularFireDatabase } from '@angular/fire/database';
import { MatDialogRef, MatSnackBar, MatDialog } from '@angular/material';
import { FirebaseApp } from '@angular/fire';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase/app';
import { GlobalService } from '../../services/global.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  posts: AngularFireList<any>;
  newURL: string;
  newDate: string;
  newTitle: string;
  newThumbnail: string;
  newBody: string;
  newPublished: boolean;
  user: any;
  editMode: boolean;
  postKey: string;
  storageRef: any;
  file: any;
  imageUrl: any;
  currentPost: AngularFireObject<any>;
  currentModeratedPosts: AngularFireList<any>;
  entityObject: any;
  dialogRef: MatDialogRef<any>;
  selectedOption: string;
  awaitingApproval: string;

  constructor(
    public afs: AngularFireStorage,
    public aFireStore: AngularFirestore,
    public db: AngularFireDatabase,
    public snackBar: MatSnackBar,
    public globalService: GlobalService,
    public router: Router,
    public route: ActivatedRoute,
    private fb: FirebaseApp,
    public dialog: MatDialog,
    private authService: AuthService
  ) {

    this.newPublished = false;
    this.posts = db.list('/posts');

    this.authService.user.subscribe((user) => {
      this.user = user;
    });

      this.storageRef = firebase.storage().ref();
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params && params.key) {
        this.editMode = true;
        this.postKey = params.key;

        if (this.router.url.includes('approval')) {
          this.currentPost = this.db.object('/approvals/posts/' + params.key);
          this.db.object('/approvals/posts/' + this.postKey).valueChanges().subscribe((approvalPost: any) => {
            this.entityObject = approvalPost;
          });
        } else {
          this.currentPost = this.db.object('/posts/' + params.key);

          // check to see if any approvals are awaiting on this post
          this.db.list('/approvals/posts', ref => ref.orderByChild('entityKey').equalTo(params.key)).snapshotChanges()
            .subscribe((approval: any) => {
              if (approval.length > 0 && approval[0]) {
                this.awaitingApproval = approval[0].key;
              }
          });
        }

        this.currentPost.valueChanges().subscribe((p: any) => {
          this.newURL = p.url;
          this.newDate = p.date;
          this.newTitle = p.title;
          this.newBody = p.body;
          this.newPublished = p.published;

          if (p.thumbnail) {
            this.imageUrl = p.thumbnail;
            this.newThumbnail = p.thumbnail;
          }
        });
      } else {
        this.newURL = null;
        this.newDate = null;
        this.newTitle = null;
        this.newThumbnail = null;
        this.newBody = null;
        this.newPublished = false;
      }
    });
  }

  handleFiles(e) {
    this.file = e.srcElement.files[0];
    if (this.file.size > 2097152) {
      const snackBarRef = this.snackBar.open('Images must be 2 MB or less', 'OK!', {
        duration: 3000
      });
    } else {
      this.uploadImage();
    }
  }

  uploadImage() {
    const storageRef = firebase.storage().ref();
    const path = Date.now().toString() + '-' + this.file.name;
    const iRef = storageRef.child('posts/' + path);
    const me = this;
    iRef.put(this.file).then((snapshot) => {
        const snackBarRef = this.snackBar.open('Image uploaded', 'OK!', {
          duration: 3000
        });
        this.storageRef.child('posts/' + path).getDownloadURL().then(function(url) {
          me.imageUrl = url;
          me.newThumbnail = url;
        });
    });
  }

  deleteImage() {
    this.newThumbnail = null;
  }

  // deleteImageRef() {
  //   const storage = firebase.storage();
  //   const imageRef = storage.refFromURL(this.imageUrl);

  //   const me = this;
  //   imageRef.delete().then(function() {
  //     me.imageUrl = null;
  //   }).catch(function(error) {
  //     console.log('error', error);
  //   });
  // }

  addPost(newURL: string, newDate: string, newTitle: string, newBody: string, newPublished: boolean) {
    console.log(this.user);
    if (this.user.email !== 'nilsholger1307@gmail.com') {
      return;
    }
   newPublished = true;

    if (newURL && newDate && newTitle && newBody) {
      const date = new Date(newDate);
      const dateTime = date.getTime();

      const postObject = {
        url: newURL,
        dateUpdated: Date.now().toString(),
        rdateUpdated: (Date.now() * -1).toString(),
        date: dateTime,
        title: newTitle,
        thumbnail: this.newThumbnail ? this.newThumbnail : null,
        body: newBody,
        published: newPublished,
        updatedBy: this.user,
        entityKey: this.postKey || null
      };
      console.log(postObject);

      // if (this.imageUrl && !this.newThumbnail) {
      //   this.deleteImageRef();
      // }


          this.posts.push(postObject).then((item) => {
            this.db.object('/posts/' + item.key + '/entityKey').set(item.key);
          });

        this.aFireStore.collection<any>('posts').add(postObject);

      const snackBarRef = this.snackBar.open('Post saved', 'OK!', {
        duration: 3000
      });
      this.router.navigate(['view-posts']);
    }

    this.validateFields(newURL, newTitle, newBody, newDate);
  }



  validateFields(url: string, title: string, body: string, date: any) {
    if (!url) {
      const snackBarRef = this.snackBar.open('You must add a URL for this post', 'OK!', {
        duration: 3000
      });
    } else if (!title) {
      const snackBarRef = this.snackBar.open('You must add a title for this post', 'OK!', {
        duration: 3000
      });
    } else if (!body) {
      const snackBarRef = this.snackBar.open('You must add content to the post', 'OK!', {
        duration: 3000
      });
    } else if (!date) {
      const snackBarRef = this.snackBar.open('You must add a date to the post', 'OK!', {
        duration: 3000
      });
    }
  }

}
