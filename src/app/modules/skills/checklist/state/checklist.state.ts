import { CategoryEntities, ItemEntities, Filter } from '../models/checklist.model';


export interface ChecklistState {
    categories: CategoryEntities;
    items: ItemEntities;
    filter: Filter;
    editMode: boolean;
}
