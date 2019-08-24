import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MoreSupportRoutingModule } from './more-support-routing.module';

import { AffirmationsComponent } from './components/affirmations/affirmations.component';
import { MoreAffirmationsComponent } from './components/more-affirmations/more-affirmations.component';
import { MoreSupportComponent } from './components/more-support/more-support.component';



@NgModule({
  declarations: [ AffirmationsComponent, MoreAffirmationsComponent, MoreSupportComponent ],
  imports: [
    MoreSupportRoutingModule,
    SharedModule
  ]
})
export class MoreSupportModule { }
