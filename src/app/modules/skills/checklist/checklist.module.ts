import { NgModule } from '@angular/core';

import { ChecklistRoutingModule } from './checklist-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { checklistReducer } from './state/checklist.reducer';
import { ChecklistComponent } from './components/checklist/checklist.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ToolbarLogoComponent } from './components/toolbar/toolbar-logo/toolbar-logo.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownStaticComponent, DropdownStaticOptionComponent } from './components/dropdown/dropdown-static.component';
import { ChecklistSearchComponent } from './components/checklist-search/checklist-search.component';
import { ChecklistFavoritesViewComponent } from './components/checklist-favorites-view/checklist-favorites-view.component';
import { ChecklistOverviewComponent } from './components/checklist-overview/checklist-overview.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { ChecklistDetailViewComponent } from './components/checklist-detail-view/checklist-detail-view.component';
import { ChecklistBarComponent } from './components/checklist-bar/checklist-bar.component';
import { ChecklistFavoriteButtonComponent } from './components/checklist-favorite-button/checklist-favorite-button.component';
import { ChecklistListComponent } from './components/checklist-list/checklist-list.component';
import { ChecklistListItemComponent } from './components/checklist-list/checklist-list-item.component';


@NgModule({
  declarations: [
      ChecklistComponent,
      ConfirmationDialogComponent,
      ToolbarComponent,
      ToolbarLogoComponent,
      DropdownComponent,
      DropdownStaticComponent,
      DropdownStaticOptionComponent,
      ChecklistSearchComponent,
      ChecklistFavoritesViewComponent,
      ChecklistOverviewComponent,
      ListViewComponent,
      ChecklistDetailViewComponent,
      ChecklistBarComponent,
      ChecklistFavoriteButtonComponent,
      ChecklistListComponent,
      ChecklistListItemComponent
    ],
  imports: [
    SharedModule,
    ChecklistRoutingModule,
    StoreModule.forFeature('checklist', checklistReducer)
  ]
})
export class ChecklistModule { }
