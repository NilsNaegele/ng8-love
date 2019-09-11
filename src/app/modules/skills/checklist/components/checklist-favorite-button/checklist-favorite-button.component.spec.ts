import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistFavoriteButtonComponent } from './checklist-favorite-button.component';

describe('ChecklistFavoriteButtonComponent', () => {
  let component: ChecklistFavoriteButtonComponent;
  let fixture: ComponentFixture<ChecklistFavoriteButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistFavoriteButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistFavoriteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
