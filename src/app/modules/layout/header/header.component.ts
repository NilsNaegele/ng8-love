import { Component, OnInit } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { SideNavService } from '../../shared/services/side-nav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedLanguage: string;


  toggleSidenav() {
    this.sideNavService.toggle();
    }

  constructor(public translate: TranslateService, private sideNavService: SideNavService) {
    translate.addLangs(['en', 'de', 'fr']);
    translate.setDefaultLang('de');
    translate.use('de');
    this.selectedLanguage = 'de';
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
