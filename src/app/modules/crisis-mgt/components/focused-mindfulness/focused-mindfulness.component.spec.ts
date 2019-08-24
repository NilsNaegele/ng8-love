import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusedMindfulnessComponent } from './focused-mindfulness.component';

describe('FocusedMindfulnessComponent', () => {
  let component: FocusedMindfulnessComponent;
  let fixture: ComponentFixture<FocusedMindfulnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FocusedMindfulnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FocusedMindfulnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
