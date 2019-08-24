import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
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
  {
    path: 'images',
    loadChildren: () => import('./modules/shared/shared.module').then(mod => mod.SharedModule)
  },
  {
    path: 'random-skills',
    loadChildren: () => import('./modules/crisis-mgt/crisis-mgt.module').then(mod => mod.CrisisMgtModule)
  }
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
