import { NgModule } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';

import { SharedModule } from '../shared/shared.module';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesLikedComponent } from './components/heroes-liked/heroes-liked.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesDetailComponent } from './components/heroes-detail/heroes-detail.component';
import { HeroesHomeComponent } from './components/heroes-home/heroes-home.component';
import { HeroesCardComponent } from './components/heroes-card/heroes-card.component';
import { ROUTES_CONFIG, RoutesConfig } from './configs/routes.config';



@NgModule({
  declarations: [
    HeroesLikedComponent,
    HeroesListComponent,
    HeroesDetailComponent,
    HeroesHomeComponent,
    HeroesCardComponent
  ],
  imports: [
    SharedModule,
    LazyLoadImageModule.forRoot({}),
    HeroesRoutingModule
  ],
  providers: [
    { provide: ROUTES_CONFIG, useValue: RoutesConfig }
  ]
})
export class HeroesModule { }
