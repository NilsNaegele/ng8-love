import { InjectionToken } from '@angular/core';


export let ENDPOINTS_CONFIG = new InjectionToken('endpoints.config');


export const EndpointsConfig: any = {
    heroes: {
        list: 'heroes-list',
        detail: getHeroDetail
    }
};

export function getHeroDetail(id) {
    return `/superhero-detail/${id}`;
}
