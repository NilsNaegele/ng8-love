import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicturesComponent } from './components/pictures/pictures.component';

const sharedRoutes: Routes = [
  {
    path: '',
    component: PicturesComponent
  },
  {
    path: 'gratitude',
    component: GratitudeComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [ RouterModule ]
})
export class SharedRoutingModule { }
