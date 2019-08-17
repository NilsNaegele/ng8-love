import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-gratitude',
  templateUrl: './gratitude.component.html',
  styleUrls: ['./gratitude.component.scss']
})
export class GratitudeComponent implements OnInit {
  gratitude = '';
  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

}
