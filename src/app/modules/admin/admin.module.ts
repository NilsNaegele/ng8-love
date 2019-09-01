import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [AddPostComponent, ViewPostComponent, ViewPostsComponent, AdminComponent],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
