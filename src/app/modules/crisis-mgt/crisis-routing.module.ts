import { AlternativeStrongThoughtsComponent } from './components/alternative-strong-thoughts/alternative-strong-thoughts.component';
import { FlashbackComponent } from './components/flashback/flashback.component';
import { FocusedMindfulnessComponent } from './components/focused-mindfulness/focused-mindfulness.component';
import { CrisisMgtComponent } from './components/crisis-mgt/crisis-mgt.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomSkillsComponent } from './components/random-skills/random-skills.component';
import { MotivationComponent } from './components/motivation/motivation.component';


const crisisRoutes: Routes = [
  {
    path: '',
    component: CrisisMgtComponent,
    children: [
      {
        path: '',
        component: RandomSkillsComponent
      }
    ]
  },
  {
    path: 'focused-mindfulness',
    component: FocusedMindfulnessComponent
  },
  {
    path: 'flashback',
    component: FlashbackComponent
  },
  {
    path: 'alternative-thoughts',
    component: AlternativeStrongThoughtsComponent
  },
  {
    path: 'motivation',
    component: MotivationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisRoutes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
