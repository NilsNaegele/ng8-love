import { NgModule } from '@angular/core';


import { CrisisRoutingModule } from './crisis-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RandomSkillsComponent } from './components/random-skills/random-skills.component';



@NgModule({
  declarations: [RandomSkillsComponent],
  imports: [
    SharedModule,
    CrisisRoutingModule
  ]
})
export class CrisisMgtModule { }
