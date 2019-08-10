import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreMindfulnessComponent } from './more-mindfulness.component';

describe('MoreMindfulnessComponent', () => {
  let component: MoreMindfulnessComponent;
  let fixture: ComponentFixture<MoreMindfulnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreMindfulnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreMindfulnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
