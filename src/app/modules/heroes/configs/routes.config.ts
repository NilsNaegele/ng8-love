import { InjectionToken } from '@angular/core';

export let ROUTES_CONFIG = new InjectionToken('routes.config');


const basePaths = {
    heroes: 'heroes-list',
    heroDetail: 'superhero-detail'
};


const routesNames = {
   home:  'superheroes-liked',
   error404: '404',
   heroes: {
       basePath: basePaths.heroes
   }
};

export const RoutesConfig: any = {
    routesNames,
    routes: {
        home: `/${routesNames.home}`,
        error404: `/${routesNames.error404}`,
        heroes: {
            detail: getHeroDetail
        }
    }
};

export function getHeroDetail(id) {
    return `/${basePaths.heroDetail}/${id}`;
}