import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { SideNavService } from '../../shared/services/side-nav.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isWellLived: boolean;
  isViewDiaryEntry: boolean;

  selectedLanguage: string;


  toggleSidenav() {
    this.sideNavService.toggle();
    }

  constructor(private router: Router,
              public translate: TranslateService,
              private sideNavService: SideNavService) {
    translate.addLangs(['en', 'de', 'fr']);
    translate.setDefaultLang('de');
    translate.use('de');
    this.selectedLanguage = 'de';

    // router.events.subscribe((url: any) => {
    //   console.log(router.url);
    // });
    router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
  ).subscribe(event => {
          console.log(event.url);
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

}
