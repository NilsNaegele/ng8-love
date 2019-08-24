import { NgModule } from '@angular/core';


import { CrisisRoutingModule } from './crisis-routing.module';
import { SharedModule } from '../shared/shared.module';
import { RandomSkillsComponent } from './components/random-skills/random-skills.component';
import { CrisisMgtComponent } from './components/crisis-mgt/crisis-mgt.component';
import { FocusedMindfulnessComponent } from './components/focused-mindfulness/focused-mindfulness.component';
import { ImageComponent } from './components/image/image.component';
import { FlashbackComponent } from './components/flashback/flashback.component';



@NgModule({
  declarations: [RandomSkillsComponent, CrisisMgtComponent, FocusedMindfulnessComponent, ImageComponent, FlashbackComponent],
  imports: [
    CrisisRoutingModule,
    SharedModule
  ]
})
export class CrisisMgtModule { }
