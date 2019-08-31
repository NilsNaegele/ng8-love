import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MoreSupportRoutingModule } from './more-support-routing.module';

import { AffirmationsComponent } from './components/affirmations/affirmations.component';
import { MoreAffirmationsComponent } from './components/more-affirmations/more-affirmations.component';
import { MoreSupportComponent } from './components/more-support/more-support.component';
import { LifeCardsComponent } from './components/life-cards/life-cards.component';
import { LiveWellComponent } from './components/live-well/live-well.component';
import { ManageDiaryEntriesComponent } from './components/manage-diary-entries/manage-diary-entries.component';
import { ViewDiaryEntriesComponent } from './components/view-diary-entries/view-diary-entries.component';



@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ AffirmationsComponent, MoreAffirmationsComponent, MoreSupportComponent, LifeCardsComponent, LiveWellComponent, ManageDiaryEntriesComponent, ViewDiaryEntriesComponent ],
  imports: [
    MoreSupportRoutingModule,
    SharedModule
  ]
})
export class MoreSupportModule { }
