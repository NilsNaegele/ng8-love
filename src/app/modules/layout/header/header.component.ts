import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { SideNavService } from '../../shared/services/side-nav.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LoginComponent } from '../../core/components/login/login.component';
import { AuthService } from '../../core/services/auth.service';
import { SnackBarService } from '../../core/services/snack-bar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isWellLived: boolean;
  isViewDiaryEntry: boolean;
  isLoggedIn: boolean;

  selectedLanguage: string;


  toggleSidenav() {
    this.sideNavService.toggle();
    }

  constructor(private authService: AuthService,
              private router: Router,
              private matDialog: MatDialog,
              public translate: TranslateService,
              private sideNavService: SideNavService) {
    translate.addLangs(['en', 'de', 'fr']);
    translate.setDefaultLang('de');
    translate.use('de');
    this.selectedLanguage = 'de';
      this.authService.getAuth().subscribe((user) => {
        // console.log('USER', user);
        if (user) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
    });
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
  ).subscribe(event => {
          // console.log(event.url);
          if (event.url === '/live-well') {
            this.isWellLived = true;
          } else {
            this.isWellLived = false;
          }
          this.isViewDiaryEntry = (event.url === '/view-diary-entries') ? true : false;
      });
  }

  ngOnInit() {
  }

  changeLang(language: string) {
    console.log(language);
    localStorage.setItem('selectedLanguage', language);
    this.translate.use(language);
    this.selectedLanguage = language;
  }

  openLogin() {
    // this.authService.signOut();
    const dialogRef = this.matDialog.open(LoginComponent, {
      width: '500px',
      // data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  signout() {
    this.authService.signOut();
  }

}
