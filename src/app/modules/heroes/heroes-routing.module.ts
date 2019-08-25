import { HeroesDetailComponent } from './components/heroes-detail/heroes-detail.component';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroesLikedComponent } from './components/heroes-liked/heroes-liked.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesHomeComponent } from './components/heroes-home/heroes-home.component';


const routes: Routes = [
  { path: 'heroes-liked', redirectTo: '/superheroes-liked' },
  { path: 'hero-detail/:id', redirectTo: '/superhero-detail/:id' },
  { path: 'heroes-list', redirectTo: '/superheroes-list' },
  { path: 'superheroes-liked',  component: HeroesLikedComponent },
  { path: 'superheroes-list', component: HeroesListComponent },
  { path: 'superhero-detail/:id', component: HeroesDetailComponent, data: { animation: 'hero' } }
  // {
  //       path: 'heroes-liked',
  //       component: HeroesLikedComponent
  // },
  // {
  //   path: 'heroes-list',
  //   component: HeroesListComponent
  // },
  // {
  //   path: ':id',
  //   component: HeroesDetailComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
