import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistFavoritesViewComponent } from './checklist-favorites-view.component';

describe('ChecklistFavoritesViewComponent', () => {
  let component: ChecklistFavoritesViewComponent;
  let fixture: ComponentFixture<ChecklistFavoritesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistFavoritesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistFavoritesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
