import { Component, OnInit } from '@angular/core';

import {
  flipOnEnterAnimation,
  bounceInDownOnEnterAnimation,
  fadeInDownOnEnterAnimation,
  rotateInUpLeftOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-stress-tolerance',
  templateUrl: './stress-tolerance.component.html',
  styleUrls: ['./stress-tolerance.component.scss'],
  animations: [
    flipOnEnterAnimation({ anchor: 'enter1', delay: 1000 }),
    bounceInDownOnEnterAnimation({ anchor: 'enter2', delay: 1000 }),
    fadeInDownOnEnterAnimation({ anchor: 'enter3', delay: 1000 }),
    rotateInUpLeftOnEnterAnimation({ anchor: 'enter4', delay: 1000 })
  ]
})
export class StressToleranceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
