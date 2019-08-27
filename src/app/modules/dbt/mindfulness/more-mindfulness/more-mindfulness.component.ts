import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  zoomInOnEnterAnimation,
  zoomInUpOnEnterAnimation,
  zoomInDownOnEnterAnimation,
  zoomInRightOnEnterAnimation
} from 'angular-animations';

@Component({
  selector: 'app-more-mindfulness',
  templateUrl: './more-mindfulness.component.html',
  styleUrls: ['./more-mindfulness.component.scss'],
  animations: [
    zoomInOnEnterAnimation({ anchor: 'enter1', delay: 500 }),
    zoomInUpOnEnterAnimation({ anchor: 'enter2', delay: 2000 }),
    zoomInDownOnEnterAnimation({ anchor: 'enter3', delay: 3000 }),
    zoomInRightOnEnterAnimation({ anchor: 'enter4', delay: 2000 })
  ]
})
export class MoreMindfulnessComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  moreGoodnessMindfulness() {
    this.router.navigate(['/more-goodness-mindfulness']);
  }

}
