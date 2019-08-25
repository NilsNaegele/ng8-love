import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';
import { map, defaultIfEmpty } from 'rxjs/operators';
import { AppConfig } from '../../configs/app.config';

@Component({
  selector: 'app-heroes-liked',
  templateUrl: './heroes-liked.component.html',
  styleUrls: ['../../styles/global.scss', './heroes-liked.component.scss']
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
