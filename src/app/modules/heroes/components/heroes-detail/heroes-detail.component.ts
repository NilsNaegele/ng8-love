import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Hero } from '../../models/hero';
import { trigger, transition, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { Observable } from 'rxjs';
import { map, defaultIfEmpty } from 'rxjs/operators';
import { AppConfig } from '../../configs/app.config';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['../../styles/global.scss', './heroes-detail.component.scss'],
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: {timing: 1, delay: 0}
    }))])
  ]
})
export class HeroesDetailComponent implements OnInit {

  hero: Hero;
  heroes$: Observable<Hero[]>;
  fadeIn: any;

  constructor(private location: Location,
              private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.data.hero.id;
    this.getHero(id);
  }

  getHero(id: string) {
    this.heroes$ = this.heroesService.getHeroes().pipe(
      map((heroes: Hero[]) => heroes.filter((h) => h.id === id)),
      defaultIfEmpty([])
    );
  }

  goBack() {
    this.location.back();
  }

}
