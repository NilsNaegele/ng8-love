import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';
import { map, defaultIfEmpty } from 'rxjs/operators';
import { AppConfig } from '../../configs/app.config';

import {
  fadeInDownOnEnterAnimation,
  rotateInDownRightOnEnterAnimation,
  slideInUpOnEnterAnimation,
  zoomInOnEnterAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-heroes-liked',
  templateUrl: './heroes-liked.component.html',
  styleUrls: ['../../styles/global.scss', './heroes-liked.component.scss'],
  animations: [
    fadeInDownOnEnterAnimation({ anchor: 'enter1', delay: 1000 }),
    rotateInDownRightOnEnterAnimation({ anchor: 'enter2', delay: 1000 }),
    slideInUpOnEnterAnimation({ anchor: 'enter3', delay: 1000 }),
    zoomInOnEnterAnimation({ anchor: 'enter4', delay: 1000 })
  ]
})
export class HeroesLikedComponent implements OnInit {

  heroes$: Observable<Hero[]>;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
    this.heroes$ = this.heroesService.getHeroes().pipe(
      map((heroes: Hero[]) => heroes.slice(0, AppConfig.topHeroesLimit)),
      defaultIfEmpty([])
    );

  }

}
