import { GratitudeComponent } from './components/gratitude/gratitude.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PicturesComponent } from './components/pictures/pictures.component';
import { ValidationComponent } from './components/validation/validation.component';
import { ValidationSelfComponent } from './components/validation/validation-self/validation-self.component';
import { ValidationOthersComponent } from './components/validation/validation-others/validation-others.component';
import { ValidationGetComponent } from './components/validation/validation-get/validation-get.component';

const sharedRoutes: Routes = [
  {
    path: '',
    component: PicturesComponent
  },
  {
    path: 'gratitude',
    component: GratitudeComponent
  },
  {
    path: 'validation',
    component: ValidationComponent
  },
  {
    path: 'validate-self',
    component: ValidationSelfComponent
  },
  {
    path: 'validate-others',
    component: ValidationOthersComponent
  },
  {
    path: 'validate-get',
    component: ValidationGetComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(sharedRoutes)
  ],
  exports: [ RouterModule ]
})
export class SharedRoutingModule { }
