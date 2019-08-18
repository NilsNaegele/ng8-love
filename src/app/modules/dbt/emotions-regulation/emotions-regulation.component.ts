import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-emotions-regulation',
  templateUrl: './emotions-regulation.component.html',
  styleUrls: ['./emotions-regulation.component.scss']
})
export class EmotionsRegulationComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
