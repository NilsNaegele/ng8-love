import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistDetailViewComponent } from './checklist-detail-view.component';

describe('ChecklistDetailViewComponent', () => {
  let component: ChecklistDetailViewComponent;
  let fixture: ComponentFixture<ChecklistDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
