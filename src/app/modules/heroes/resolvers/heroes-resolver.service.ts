import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { HeroesService } from '../services/heroes.service';

@Injectable()
export class HeroesResolverService implements Resolve<Observable<Hero>> {

  constructor(private heroesService: HeroesService) { }


  resolve(route: ActivatedRouteSnapshot) {
    return this.heroesService.getHero(route.paramMap.get('id'));
  }
}
