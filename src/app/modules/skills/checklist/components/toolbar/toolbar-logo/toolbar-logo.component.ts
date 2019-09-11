import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar-logo',
  templateUrl: './toolbar-logo.component.html',
  styleUrls: ['./toolbar-logo.component.scss']
})
export class ToolbarLogoComponent implements OnInit {
  @Input() showText = true;
  constructor() { }

  ngOnInit() {
  }

}
