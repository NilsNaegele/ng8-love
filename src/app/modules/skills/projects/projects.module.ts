import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsViewComponent } from './components/projects-view/projects-view.component';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsDialogComponent } from './components/projects-dialog/projects-dialog.component';

import { projectsReducer } from './state/projects.reducer';


@NgModule({
  declarations: [ProjectsViewComponent, ProjectsDialogComponent],
  imports: [
    SharedModule,
    ProjectsRoutingModule,
    StoreModule.forFeature('projects', projectsReducer)
  ],
  entryComponents: [ ProjectsDialogComponent ]
})
export class ProjectsModule { }
