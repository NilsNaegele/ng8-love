import { createSelector } from '@ngrx/store';
import { extractedRouteParams } from '../../shared/router.utils';
import { computeScore } from '../../state/skills-state.utils';
import { SkillsSelectors } from '../../state/skills.selectors';
import { Project } from '../models/projects.model';
import { EntityState } from '../../shared/models';

export const defaultProject: EntityState<Project> = {
  default: {
  id: 'default',
  name: 'default',
  disabledCategories: {},
  favorites: {},
  items: {},
  creationTime: Date.now()
  }
};

export namespace ProjectsSelectors {
  export const getProjectEntities = createSelector(
    SkillsSelectors.getProjectsState,
    projects => projects.entities
  );

  export const getSelectedProjectId = createSelector(
    SkillsSelectors.getRouterState,
    (routerState): string => {
      const { project } = extractedRouteParams(routerState.root, 1);

      return project;
    }
  );

  export const getSelectedProject = createSelector(
    getProjectEntities,
    getSelectedProjectId,
    (projectEntities, projectId): Project => {
      const emptyProject = {} as Project;

      if (!projectEntities) {
        return emptyProject;
      }

      return projectEntities[projectId] || emptyProject;
    }
  );

  export const getProjectItems = createSelector(
    getSelectedProject,
    project => {
      return project.items || {};
    }
  );

  export const getDisabledCategories = createSelector(
    getSelectedProject,
    project => {
      return project.disabledCategories || {};
    }
  );

  export const getFavoriteEntities = createSelector(
    getSelectedProject,
    project => {
      return project.favorites || {};
    }
  );

  export const getProjectsScores = createSelector(
    getProjectEntities,
    SkillsSelectors.getCategoryEntities,
    (projectEntities, categoryEntities) => {
      if (projectEntities === undefined) {
        projectEntities = defaultProject;
      }
      // console.log(projectEntities, categoryEntities);
      return Object.keys(projectEntities).reduce((scores, projectId) => {
        const disabledCategories = projectEntities[projectId].disabledCategories;
        const activeCategories = Object.keys(categoryEntities).filter(categoryId => !disabledCategories[categoryId]);
        const categoryScore = activeCategories.reduce((score, categoryId) => {
          return score + computeScore(categoryEntities[categoryId].items, projectEntities[projectId].items);
        }, 0);

        scores[projectId] = parseFloat((categoryScore / activeCategories.length).toFixed(2));

        return scores;
      }, {});
    }
  );

  export const getProjects = createSelector(
    getProjectEntities,
    getProjectsScores,
    (projectEntities, projectScores) => {
      // console.log(projectEntities);
      if (projectEntities === undefined) {
        projectEntities = defaultProject;
      }
      const addScore = (project): Project => {
        return {
          ...project,
          score: projectScores[project.id]
        };
      };

      return Object.values(projectEntities)
        .map(addScore)
        .sort((a: Project, b: Project) => b.creationTime - a.creationTime);
    }
  );

  export const getProjectById = (id: string) => {
    return createSelector(
      getProjectEntities,
      projectEntities => projectEntities[id]
    );
  };
}
