import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { StartComponent } from './start/start.component';
import { MindfulnessComponent } from './mindfulness/mindfulness.component';


const dbtRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'mindfulness',
    component: MindfulnessComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(dbtRoutes)],
  exports: [
    RouterModule
  ]
})
export class DbtRoutingModule { }
