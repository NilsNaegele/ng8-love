import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  navigateDbt() {
    this.router.navigate(['dbt-modules']);
  }

  navigateAffirmations() {
    this.router.navigate(['affirmations']);
  }

  navigateUmgangMitGefuehlen() {
    this.router.navigate(['emotions-regulation']);
  }

  navigateBeziehungen() {
    this.router.navigate(['relationships']);
  }

  navigateToleranz() {
    this.router.navigate(['stress-tolerance']);
  }

  navigateValidation() {
    this.router.navigate(['validation']);
  }

  navigateRandomSkills() {
    this.router.navigate(['random-skills']);
  }

  navigateFocusedMindfulness() {
    this.router.navigate(['focused-mindfulness']);
  }

  constructor(private router: Router, public translate: TranslateService) { }

  ngOnInit() {
  }

}
