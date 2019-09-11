import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistListItemComponent } from './checklist-list-item.component';

describe('ChecklistListItemComponent', () => {
  let component: ChecklistListItemComponent;
  let fixture: ComponentFixture<ChecklistListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
