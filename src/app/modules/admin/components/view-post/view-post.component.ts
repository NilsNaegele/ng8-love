import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  postContent: any;
  post: any;

  constructor(
    public db: AngularFirestore,
    public route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.postContent = this.db.collection('/posts');
        this.postContent.valueChanges().subscribe(p => {
          if (p[0].published) {
            this.post = p[0];
          } else {
            this.post = {
              title: 'Artikel nicht gefunden',
              body: ''
            };
          }
        });
    });
  }

}
