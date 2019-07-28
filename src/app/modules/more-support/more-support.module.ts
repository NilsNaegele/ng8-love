import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MoreSupportRoutingModule } from './more-support-routing.module';

import { AffirmationsComponent } from './affirmations/affirmations.component';



@NgModule({
  declarations: [ AffirmationsComponent ],
  imports: [
    MoreSupportRoutingModule,
    SharedModule
  ]
})
export class MoreSupportModule { }
