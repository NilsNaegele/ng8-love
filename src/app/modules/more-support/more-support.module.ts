import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MoreSupportRoutingModule } from './more-support-routing.module';

import { AffirmationsComponent } from './components/affirmations/affirmations.component';
import { MoreAffirmationsComponent } from './components/more-affirmations/more-affirmations.component';
import { MoreSupportComponent } from './components/more-support/more-support.component';
import { LifeCardsComponent } from './components/life-cards/life-cards.component';



@NgModule({
  declarations: [ AffirmationsComponent, MoreAffirmationsComponent, MoreSupportComponent, LifeCardsComponent ],
  imports: [
    MoreSupportRoutingModule,
    SharedModule
  ]
})
export class MoreSupportModule { }
