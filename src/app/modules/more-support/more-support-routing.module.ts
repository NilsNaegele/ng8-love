import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffirmationsComponent } from './affirmations/affirmations.component';


const moreSupportRoutes: Routes = [
  {
    path: '',
    component: AffirmationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(moreSupportRoutes)],
  exports: [RouterModule]
})
export class MoreSupportRoutingModule { }
