import { DbtRoutingModule } from './dbt-routing.module';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { StartComponent } from './start/start.component';
import { MindfulnessComponent } from './mindfulness/mindfulness.component';
import { MindfulnessBottomSheetComponent } from './mindfulness-bottom-sheet/mindfulness-bottom-sheet.component';
import { EmotionsRegulationComponent } from './emotions-regulation/emotions-regulation.component';
import { MoreMindfulnessComponent } from './mindfulness/more-mindfulness/more-mindfulness.component';



@NgModule({
  declarations: [ StartComponent, MindfulnessComponent, MindfulnessBottomSheetComponent, EmotionsRegulationComponent, MoreMindfulnessComponent ],
  imports: [
    DbtRoutingModule,
    SharedModule
  ],
  entryComponents: [ MindfulnessBottomSheetComponent ]
})
export class DbtModule { }
