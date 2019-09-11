import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown-static',
  templateUrl: './dropdown-static.component.html',
  styleUrls: ['./dropdown-static.component.scss']
})
export class DropdownStaticComponent {}

@Component({
  selector: 'app-dropdown-static-option',
  template: `
    <ng-content></ng-content>
  `
})
export class DropdownStaticOptionComponent {}
