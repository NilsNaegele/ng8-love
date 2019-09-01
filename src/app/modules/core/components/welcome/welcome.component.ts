import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { rotateInOnEnterAnimation } from 'angular-animations';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
  animations: [
    rotateInOnEnterAnimation({ anchor: 'enter1', delay: 1000 })
  ]
})
export class WelcomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateAffirmationen() {
    this.router.navigate(['affirmations']);
  }

}
