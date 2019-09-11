import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checklist-list',
  template: '<ng-content></ng-content>',
  styleUrls: ['./checklist-list.component.scss']
})
export class ChecklistListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
