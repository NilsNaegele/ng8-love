import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.scss']
})
export class ViewPostsComponent implements OnInit {
  posts: Observable<any[]>;
  searchTerm: string;

  constructor(public db: AngularFirestore,
            public globalService: GlobalService,
            public router: Router,
            private title: Title,
            private meta: Meta) {
              this.posts = this.db.collection('/posts').valueChanges();
              this.globalService.searchTerm.subscribe((term) => {
                  this.searchTerm = term;
              });
            }

  ngOnInit() {
    // this.title.setTitle('Blog');
    this.meta.updateTag({ content: 'view recent blog posts'}, `name='description'`);
    if (this.router.url.includes('blog')) {
      this.globalService.searchTerm.next('');
    }
  }

  getPostImage(post: any) {
    if (post.thumbnail) {
      return post.thumbnail;
    } else {
      return '../../../../../assets/placeholder.jpg';
    }
  }

}
