import { Component, OnInit, Inject } from '@angular/core';

import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Store } from '@ngrx/store';
import { of, timer } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { selectOnce } from '../../../shared/operators';
import { convertToProjectId } from '../../../shared/utils';
import { SkillsState } from '../../../state/skills.state';
import { Project } from '../../models/projects.model';
import { ProjectsSelectors } from '../../state/projects.selectors';


export enum ProjectDialogMode {
  Create = 'Create',
  Edit = 'Edit'
}

export enum ProjectDialogResultType {
  AddOrEdit = 'AddOrEdit',
  Delete = 'Delete'
}

export interface ProjectDialogData {
  title: string;
  submitButtonText: string;
  project: Project;
  mode: ProjectDialogMode;
}

export interface ProjectDialogResult {
    payload?: Partial<Project>;
    type?: ProjectDialogResultType;
}

class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && (control.dirty || control.touched));
  }
}

const validateProjectId = (whitelist: string[] | string = [], store: Store<SkillsState>) => {
  return (control: FormControl) => {
    whitelist = typeof whitelist === 'string' ? [whitelist] : whitelist;

    return whitelist.includes(control.value)
            ? of(null)
            : timer(300).pipe(
              switchMap(() => store.pipe(selectOnce(ProjectsSelectors.getProjectById(convertToProjectId(control.value))))),
              map(project => (!project ? null : { projectExists: true}))
            );
  };
};

const verifyProjectName = (projectName: string) => {
  return (control: FormControl) => {
    return control.value === projectName ? null : { verifyProjectName: true };
  };
};

@Component({
  selector: 'app-projects-dialog',
  templateUrl: './projects-dialog.component.html',
  styleUrls: ['./projects-dialog.component.scss']
})
export class ProjectsDialogComponent implements OnInit {
  mode: ProjectDialogMode;
  title: string;
  project: Partial<Project>;
  submitButtonText: string;
  enableDangerZone = false;
  showDangerZone = false;
  maxLength = 25;

  projectName = new FormControl('', [Validators.required, Validators.maxLength(this.maxLength)]);
  verifyProjectName = new FormControl('');
  errorStateMatcher = new CustomErrorStateMatcher();
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ProjectDialogData,
    private store: Store<SkillsState>,
    public dialogRef: MatDialogRef<ProjectsDialogComponent, ProjectDialogResult>
  ) { }

  ngOnInit() {
    const { title, project, mode = ProjectDialogMode.Create, submitButtonText } = this.data;

    this.project = project ? project : { name: ''};
    this.mode = mode;
    this.title = title;
    this.submitButtonText = !submitButtonText ? title : submitButtonText;

    this.projectName.setValue(this.project.name);
    this.projectName.setAsyncValidators(validateProjectId(this.project.name, this.store));
    this.verifyProjectName.setValidators(verifyProjectName(this.project.name));
  }

  close(deleteProject = false) {
    if (deleteProject) {
      return this.dialogRef.close({
        type: ProjectDialogResultType.Delete,
        payload: { id: this.project.id }
      });
    }
    if (this.canClose()) {
      const projectName = this.projectName.value;
      const projectId = this.generateProjectId(projectName);

      return this.dialogRef.close({
        type: ProjectDialogResultType.AddOrEdit,
        payload: { id: projectId, name: projectName }
      });
    }
  }

  deleteProject() {
    this.close(true);
  }

  isEditMode() {
    return this.mode === ProjectDialogMode.Edit;
  }

  canClose() {
    return (
      this.projectName.valid &&
      !this.projectName.pending &&
      this.projectName.dirty &&
      !this.projectName.pristine &&
      this.hasChanged(this.projectName.value, this.project.name)
    );
  }

  private generateProjectId(name: string) {
    return convertToProjectId(name.trim());
  }

  private hasChanged(current: string, old: string) {
    const currentId = this.generateProjectId(current);
    const oldId = this.generateProjectId(old);

    return currentId !== oldId;
  }

}
