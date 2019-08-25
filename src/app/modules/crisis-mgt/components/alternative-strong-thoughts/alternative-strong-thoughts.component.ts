import { Component, OnInit } from '@angular/core';

import {
        bounceInUpOnEnterAnimation,
        bounceInRightOnEnterAnimation,
        fadeInOnEnterAnimation,
        bounceInLeftOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-alternative-strong-thoughts',
  templateUrl: './alternative-strong-thoughts.component.html',
  styleUrls: ['./alternative-strong-thoughts.component.scss'],
  animations: [
    bounceInUpOnEnterAnimation({ anchor: 'enter1', delay: 800 }),
    fadeInOnEnterAnimation({ anchor: 'enter2', delay: 3000 }),
    bounceInRightOnEnterAnimation({ anchor: 'enter3', delay: 1700 }),
    bounceInLeftOnEnterAnimation({ anchor: 'enter4', delay: 4000 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter5', delay: 5000 }),
    bounceInUpOnEnterAnimation({ anchor: 'enter6', delay: 6000 })
  ]
})
export class AlternativeStrongThoughtsComponent implements OnInit {
  strongThoughts;
  constructor() { }

  ngOnInit() {
  }

}
