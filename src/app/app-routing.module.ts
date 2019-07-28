import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/core/core.module').then(mod => mod.CoreModule)
  },
  {
    path: 'dbt-modules',
    loadChildren: () => import('./modules/dbt/dbt.module').then(mod => mod.DbtModule)
  },
  {
    path: 'affirmations',
    loadChildren: () => import('./modules/more-support/more-support.module').then(mod => mod.MoreSupportModule)
  },
  // {
  //   path: '**',
  //   redirectTo: '/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
