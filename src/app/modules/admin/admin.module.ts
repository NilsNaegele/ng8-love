import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddPostComponent } from './components/add-post/add-post.component';
import { ViewPostComponent } from './components/view-post/view-post.component';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { AdminComponent } from './components/admin/admin.component';
import { SharedModule } from '../shared/shared.module';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';


@NgModule({
  declarations: [AddPostComponent, ViewPostComponent, ViewPostsComponent, AdminComponent, SearchPipe, SortPipe, TruncatePipe],
  imports: [
    SharedModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
