import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import {
  zoomInOnEnterAnimation,
  zoomInUpOnEnterAnimation,
  zoomInDownOnEnterAnimation,
  zoomInRightOnEnterAnimation
} from 'angular-animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  animations: [
    trigger('flyIn', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-500%)' }),
        animate(1000)
      ])
    ]),
    zoomInOnEnterAnimation({ anchor: 'enter1', delay: 500 }),
    zoomInUpOnEnterAnimation({ anchor: 'enter2', delay: 2000 }),
    zoomInDownOnEnterAnimation({ anchor: 'enter3', delay: 3000 }),
    zoomInRightOnEnterAnimation({ anchor: 'enter4', delay: 2000 })
  ]
})
export class StartComponent {
  centered = false;
  disabled = false;
  unbounded = false;
  radius = 50;
  color = '#3f51b5';

  constructor(private router: Router) {}

  navigateAchtsamkeit() {
    // console.log('Achtsamkeit');
    this.router.navigate(['/mindfulness']);
  }
  navigateUmgangMitGefuehlen() {
    this.router.navigate(['/emotions-regulation']);
  }
  navigateToleranz() {
    this.router.navigate(['/stress-tolerance']);
  }

  navigateRelationships() {
    this.router.navigate(['/relationships']);
 }

 navigateValidation() {
   this.router.navigate(['/validation']);
 }

}
