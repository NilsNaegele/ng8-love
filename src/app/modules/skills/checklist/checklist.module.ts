import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChecklistRoutingModule } from './checklist-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ChecklistRoutingModule,
    // StoreModule.forFeature('checklist', checklistReducer)
  ]
})
export class ChecklistModule { }
