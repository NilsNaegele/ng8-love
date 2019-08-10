import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { MindfulnessComponent } from './mindfulness/mindfulness.component';
import { EmotionsRegulationComponent } from './emotions-regulation/emotions-regulation.component';
import { MoreMindfulnessComponent } from './mindfulness/more-mindfulness/more-mindfulness.component';
import { StressToleranceComponent } from './stress-tolerance/stress-tolerance.component';


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
    path: 'more-mindfulness',
    component: MoreMindfulnessComponent
  },
  {
    path: 'emotions-regulation',
    component: EmotionsRegulationComponent
  },
  {
    path: 'stress-tolerance',
    component: StressToleranceComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(dbtRoutes)],
  exports: [
    RouterModule
  ]
})
export class DbtRoutingModule { }
