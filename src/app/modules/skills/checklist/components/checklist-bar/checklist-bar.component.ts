import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ChecklistFilter } from '../../models/checklist.model';

@Component({
  selector: 'app-checklist-bar',
  templateUrl: './checklist-bar.component.html',
  styleUrls: ['./checklist-bar.component.scss']
})
export class ChecklistBarComponent {
  @Input() filter: ChecklistFilter;
  @Input() showActionButtons = true;
  @Output() filterChange = new EventEmitter<ChecklistFilter>();
  @Output() checkAll = new EventEmitter<void>();
  @Output() uncheckAll = new EventEmitter<void>();

}
