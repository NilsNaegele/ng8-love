import { Component, OnInit } from '@angular/core';

import {
  fadeInLeftOnEnterAnimation,
  fadeInRightOnEnterAnimation,
  flipInXOnEnterAnimation,
  flipInYOnEnterAnimation,
  fadeInExpandOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-relationships',
  templateUrl: './relationships.component.html',
  styleUrls: ['./relationships.component.scss'],
  animations: [
    fadeInLeftOnEnterAnimation({ anchor: 'enter1', delay: 500 }),
    fadeInRightOnEnterAnimation({ anchor: 'enter2', delay: 1000 }),
    flipInXOnEnterAnimation({ anchor: 'enter3', delay: 1000 }),
    flipInYOnEnterAnimation({ anchor: 'enter4', delay: 1000 }),
    fadeInExpandOnEnterAnimation({ anchor: 'enter5', delay: 1000 })
  ]
})
export class RelationshipsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
