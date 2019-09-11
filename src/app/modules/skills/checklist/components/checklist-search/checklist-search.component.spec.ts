import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistSearchComponent } from './checklist-search.component';

describe('ChecklistSearchComponent', () => {
  let component: ChecklistSearchComponent;
  let fixture: ComponentFixture<ChecklistSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
