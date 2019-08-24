import { Component, OnInit } from '@angular/core';

import { bounceInRightOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-flashback',
  templateUrl: './flashback.component.html',
  styleUrls: ['./flashback.component.scss'],
  animations: [
    bounceInRightOnEnterAnimation({ anchor: 'enter1', delay: 1000 }),
    bounceInRightOnEnterAnimation({ anchor: 'enter2', delay: 2000 }),
    bounceInRightOnEnterAnimation({ anchor: 'enter3', delay: 3000 }),
    bounceInRightOnEnterAnimation({ anchor: 'enter4', delay: 4000 }),
    bounceInRightOnEnterAnimation({ anchor: 'enter5', delay: 5000 }),
    bounceInRightOnEnterAnimation({ anchor: 'enter6', delay: 6000 })
  ]
})
export class FlashbackComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
