import { ProjectsModule } from './projects/projects.module';
import { NgModule } from '@angular/core';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {  } from './shared/components/score-chart/score-chart.component';

import { SkillsRoutingModule } from './skills-routing.module';
import { SharedModule } from '../shared/shared.module';
import { environment } from 'src/environments/environment';
import { ROOT_REDUCER, META_REDUCERS } from './state/skills.state';
import { ChecklistModule } from './checklist/checklist.module';


@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(ROOT_REDUCER, { metaReducers: META_REDUCERS}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    SharedModule,
    ProjectsModule,
    ChecklistModule,
    SkillsRoutingModule,
    StoreRouterConnectingModule.forRoot(),
  ]
})
export class SkillsModule { }
