import { NgModule } from '@angular/core';


import { CrisisRoutingModule } from './crisis-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RandomSkillsComponent } from './components/random-skills/random-skills.component';
import { CrisisMgtComponent } from './components/crisis-mgt/crisis-mgt.component';



@NgModule({
  declarations: [RandomSkillsComponent, CrisisMgtComponent],
  imports: [
    CrisisRoutingModule,
    SharedModule
  ]
})
export class CrisisMgtModule { }
