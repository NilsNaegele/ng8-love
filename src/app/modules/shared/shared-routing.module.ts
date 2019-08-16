import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicturesComponent } from './components/pictures/pictures.component';

const sharedRoutes: Routes = [
  {
    path: '',
    component: PicturesComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [ RouterModule ]
})
export class SharedRoutingModule { }
