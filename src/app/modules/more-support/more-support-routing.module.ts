import { MoreSupportComponent } from './components/more-support/more-support.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffirmationsComponent } from './components/affirmations/affirmations.component';
import { MoreAffirmationsComponent } from './components/more-affirmations/more-affirmations.component';


const moreSupportRoutes: Routes = [
  {
    path: '',
    component: MoreSupportComponent,
    children: [
      {
        path: '',
        component: AffirmationsComponent
      }
    ]
  },
  {
    path: 'more-affirmations',
    component: MoreAffirmationsComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(moreSupportRoutes)],
  exports: [RouterModule]
})
export class MoreSupportRoutingModule { }
