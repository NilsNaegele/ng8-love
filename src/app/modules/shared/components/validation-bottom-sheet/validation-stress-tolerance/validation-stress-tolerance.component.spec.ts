import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationStressToleranceComponent } from './validation-stress-tolerance.component';

describe('ValidationStressToleranceComponent', () => {
  let component: ValidationStressToleranceComponent;
  let fixture: ComponentFixture<ValidationStressToleranceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationStressToleranceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationStressToleranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
