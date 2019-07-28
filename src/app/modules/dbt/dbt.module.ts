import { DbtRoutingModule } from './dbt-routing.module';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { StartComponent } from './start/start.component';
import { MindfulnessComponent } from './mindfulness/mindfulness.component';
import { MindfulnessBottomSheetComponent } from './mindfulness-bottom-sheet/mindfulness-bottom-sheet.component';



@NgModule({
  declarations: [ StartComponent, MindfulnessComponent, MindfulnessBottomSheetComponent ],
  imports: [
    DbtRoutingModule,
    SharedModule
  ],
  entryComponents: [ MindfulnessBottomSheetComponent ]
})
export class DbtModule { }
