import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmotionsRegulationComponent } from './emotions-regulation.component';

describe('EmotionsRegulationComponent', () => {
  let component: EmotionsRegulationComponent;
  let fixture: ComponentFixture<EmotionsRegulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotionsRegulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmotionsRegulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
