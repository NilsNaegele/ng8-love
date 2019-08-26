import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, OnInit, Input, ChangeDetectionStrategy, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { Hero } from '../../models/hero';
import { HeroesService } from '../../services/heroes.service';
import { fadeIn } from 'ng-animate';
import { useAnimation, trigger, transition } from '@angular/animations';
import { ROUTES_CONFIG } from '../../configs/routes.config';

@Component({
  selector: 'app-heroes-card',
  templateUrl: './heroes-card.component.html',
  styleUrls: ['./heroes-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [transition('* => *', useAnimation(fadeIn, {
      params: { timing: 1, delay: 0}
    }))])
  ]
})
export class HeroesCardComponent implements OnInit {
  @Input() hero: Hero;
  fadeIn: any;
  canVote: boolean;

// @Inject(ROUTES_CONFIG) public routesConfig: any
  constructor(private router: Router,
              private snackBar: MatSnackBar,
              private cookieService: CookieService,
              private heroesService: HeroesService,
              @Inject(ROUTES_CONFIG) public routesConfig: any) { }

  ngOnInit() {
    this.canVote = this.heroesService.checkIfUserCanVote();
  }

  like(hero: Hero): Promise<void> {
    if (this.canVote) {
      hero.like();
      this.cookieService.put('votes', '' + (Number(this.cookieService.get('votes') || 0) + 1));
      return this.heroesService.updateHero(hero);
    } else {
      this.snackBar.open('Kannst nicht mehr wählen', '', { duration: 1000});
    }
  }

}
