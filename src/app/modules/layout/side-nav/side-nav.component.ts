import { LoginComponent } from '../../core/components/login/login.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';

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

  navigateAlternativeStrongThoughts() {
    this.router.navigate(['alternative-thoughts']);
  }

  navigateFlashback() {
    this.router.navigate(['flashback']);
  }

  openDialog() {
    const dialogRef = this.matDialog.open(LoginComponent, {
      width: '500px',
      // data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  constructor(private router: Router,
    public translate: TranslateService,
    private matDialog: MatDialog) { }

  ngOnInit() {
  }

}
