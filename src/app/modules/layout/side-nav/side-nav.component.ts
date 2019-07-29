import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
