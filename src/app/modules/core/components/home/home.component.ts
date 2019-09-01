import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {
  rotateInOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    rotateInOnEnterAnimation({ anchor: 'enter1', delay: 1000 })
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
