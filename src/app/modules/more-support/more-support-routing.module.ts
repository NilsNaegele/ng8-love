import { LiveWellComponent } from './components/live-well/live-well.component';
import { MoreSupportComponent } from './components/more-support/more-support.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffirmationsComponent } from './components/affirmations/affirmations.component';
import { MoreAffirmationsComponent } from './components/more-affirmations/more-affirmations.component';
import { LifeCardsComponent } from './components/life-cards/life-cards.component';


const moreSupportRoutes: Routes = [
  {
    path: '',
    component: MoreSupportComponent,
    children: [
      {
        path: '',
        component: AffirmationsComponent
      }
    ]
  },
  {
    path: 'more-affirmations',
    component: MoreAffirmationsComponent
  },
  {
    path: 'life-cards',
    component: LifeCardsComponent
  },
  {
    path: 'live-well',
    component: LiveWellComponent
  }
];



@NgModule({
  imports: [RouterModule.forChild(moreSupportRoutes)],
  exports: [RouterModule]
})
export class MoreSupportRoutingModule { }
