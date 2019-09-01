import { ViewPostComponent } from './components/view-post/view-post.component';
import { ViewPostsComponent } from './components/view-posts/view-posts.component';
import { AddPostComponent } from './components/add-post/add-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';


const adminRoutes: Routes = [
  { path: 'add-post', redirectTo: '/add-superpost' },
  { path: 'view-post/:id', redirectTo: '/view-superpost/:id' },
  { path: 'view-posts', redirectTo: '/view-superposts' },
  { path: 'add-superpost', component: AddPostComponent },
  { path: 'view-superposts', component: ViewPostsComponent },
  { path: 'view-superpost/:id', component: ViewPostComponent }
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
