import { ChecklistComponent } from './components/checklist/checklist.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChecklistFavoritesViewComponent } from './components/checklist-favorites-view/checklist-favorites-view.component';
import { ChecklistOverviewComponent } from './components/checklist-overview/checklist-overview.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ChecklistDetailViewComponent } from './components/checklist-detail-view/checklist-detail-view.component';


const checklistRoutes: Routes = [
  {
    path: ':project/checklist',
    component: ChecklistComponent,
    children: [
      { path: 'favorites', component: ChecklistFavoritesViewComponent },
      {
        path: '',
        component: ChecklistOverviewComponent,
        children: [
          { path: ':category', component: ListViewComponent },
          { path: ':category/:item', component: ChecklistDetailViewComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(checklistRoutes)],
  exports: [RouterModule]
})
export class ChecklistRoutingModule { }
