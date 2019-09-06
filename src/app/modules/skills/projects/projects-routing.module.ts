import { ProjectsViewComponent } from './components/projects-view/projects-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const projectsRoutes: Routes = [
  {
    path: 'super-projects', component: ProjectsViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(projectsRoutes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
