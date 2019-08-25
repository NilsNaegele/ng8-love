import { Component, OnInit } from '@angular/core';

import {
  bounceInUpOnEnterAnimation,
  bounceInRightOnEnterAnimation,
  fadeInOnEnterAnimation,
  bounceInLeftOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-motivation',
  templateUrl: './motivation.component.html',
  styleUrls: ['./motivation.component.scss'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1', delay: 800 }),
    fadeInOnEnterAnimation({ anchor: 'enter2', delay: 3000 }),
    bounceInRightOnEnterAnimation({ anchor: 'enter3', delay: 1700 }),
    bounceInLeftOnEnterAnimation({ anchor: 'enter4', delay: 4000 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter5', delay: 5000 }),
    bounceInRightOnEnterAnimation({ anchor: 'enter6', delay: 6000 })
  ]
})
export class MotivationComponent implements OnInit {

  strongThoughts: any;

  constructor() { }

  ngOnInit() {
  }

}
