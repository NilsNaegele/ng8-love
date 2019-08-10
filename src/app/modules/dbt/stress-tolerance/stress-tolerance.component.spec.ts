import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StressToleranceComponent } from './stress-tolerance.component';

describe('StressToleranceComponent', () => {
  let component: StressToleranceComponent;
  let fixture: ComponentFixture<StressToleranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StressToleranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StressToleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
