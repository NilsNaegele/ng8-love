import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { StartComponent } from './start/start.component';
import { MindfulnessComponent } from './mindfulness/mindfulness.component';
import { EmotionsRegulationComponent } from './emotions-regulation/emotions-regulation.component';


const dbtRoutes: Routes = [
  {
    path: '',
    component: StartComponent
  },
  {
    path: 'mindfulness',
    component: MindfulnessComponent
  },
  {
    path: 'emotions-regulation',
    component: EmotionsRegulationComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(dbtRoutes)],
  exports: [
    RouterModule
  ]
})
export class DbtRoutingModule { }
