import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomSkillsComponent } from './components/random-skills/random-skills.component';


const crisisRoutes: Routes = [
  {
    path: '',
    component: RandomSkillsComponent,  // separate cmp with router-outler
    children: [
      {
        path: 'random-skills',
        component: RandomSkillsComponent
      }
    ]
  }
  // {
  //   path: 'mindfulness',
  //   component: MindfulnessComponent
  // },
  // {
  //   path: 'more-mindfulness',
  //   component: MoreMindfulnessComponent
  // },
  // {
  //   path: 'more-goodness-mindfulness',
  //   component: MoreGoodnessMindfulnessComponent
  // },
  // {
  //   path: 'emotions-regulation',
  //   component: EmotionsRegulationComponent
  // },
  // {
  //   path: 'stress-tolerance',
  //   component: StressToleranceComponent
  // },
  // {
  //   path: 'relationships',
  //   component: RelationshipsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(crisisRoutes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
