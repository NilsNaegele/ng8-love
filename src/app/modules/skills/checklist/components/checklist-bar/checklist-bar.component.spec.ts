import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistBarComponent } from './checklist-bar.component';

describe('ChecklistBarComponent', () => {
  let component: ChecklistBarComponent;
  let fixture: ComponentFixture<ChecklistBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
