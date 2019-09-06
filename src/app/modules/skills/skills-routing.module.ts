import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const skillsRoutes: Routes = [
  {
    path: 'projects', redirectTo: 'super-projects'
  }
];

@NgModule({
  imports: [RouterModule.forChild(skillsRoutes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
