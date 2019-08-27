import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import {
  rotateInOnEnterAnimation,
  rotateInUpLeftOnEnterAnimation,
  rotateInUpRightOnEnterAnimation,
  rotateInDownLeftOnEnterAnimation,
  rotateInDownRightOnEnterAnimation
} from 'angular-animations';



@Component({
  selector: 'app-emotions-regulation',
  templateUrl: './emotions-regulation.component.html',
  styleUrls: ['./emotions-regulation.component.scss'],
  animations: [
    rotateInOnEnterAnimation({ anchor: 'enter1', delay: 500 }),
    rotateInUpRightOnEnterAnimation({ anchor: 'enter2', delay: 1000 }),
    rotateInUpLeftOnEnterAnimation({ anchor: 'enter3', delay: 1000 }),
    rotateInDownLeftOnEnterAnimation({ anchor: 'enter4', delay: 1000 }),
    rotateInDownRightOnEnterAnimation({ anchor: 'enter5', delay: 1000 })
  ]
})
export class EmotionsRegulationComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
