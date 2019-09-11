import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CheckAll, ToggleFavorite, ToggleItem, UncheckAll } from '../../../projects/state/projects.actions';
import { selectOnce } from '../../../shared/operators';
import { SkillsState } from '../../../state/skills.state';
import { CategoryEntity, ChecklistFilter, ChecklistItem } from '../../models/checklist.model';
import { SetCategoriesFilter } from '../../state/checklist.actions';
import { ChecklistSelectors } from '../../state/checklist.selectors';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  items$: Observable<any>;
  filter$: Observable<ChecklistFilter>;
  showActionButtons$: Observable<boolean>;

  constructor(private store: Store<SkillsState>, private breakPointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.items$ = this.store.pipe(select(ChecklistSelectors.getItemsFromSelectedCategory));
    this.items$.subscribe((data) => {
      console.log('DATA', data);
    });
    this.filter$ = this.store.pipe(select(ChecklistSelectors.getCategoriesFilter));

    this.showActionButtons$ = this.breakPointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(map((result: BreakpointState) => !result.matches));
  }

  toggleItem(item: ChecklistItem) {
    this.store.dispatch(new ToggleItem(item));
  }

  setFilter(filter: ChecklistFilter) {
    this.store.dispatch(new SetCategoriesFilter(filter));
  }

  checkAllItems() {
    this.getSelectedCategory().subscribe(category => this.store.dispatch(new CheckAll(category)));
  }

  uncheckAllItems() {
    this.getSelectedCategory().subscribe(category => this.store.dispatch(new UncheckAll(category)));
  }

  toggleFavorite(item: ChecklistItem) {
    this.store.dispatch(new ToggleFavorite(item));
  }

  trackById(_, item: ChecklistItem) {
    return item.id;
  }

  private getSelectedCategory(): Observable<CategoryEntity> {
    return this.store.pipe(selectOnce(ChecklistSelectors.getSelectedCategory));
  }

}
