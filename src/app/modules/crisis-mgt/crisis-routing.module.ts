import { CrisisMgtComponent } from './components/crisis-mgt/crisis-mgt.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RandomSkillsComponent } from './components/random-skills/random-skills.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisRoutes)],
  exports: [RouterModule]
})
export class CrisisRoutingModule { }
