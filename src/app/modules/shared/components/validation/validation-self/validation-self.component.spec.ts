import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationSelfComponent } from './validation-self.component';

describe('ValidationSelfComponent', () => {
  let component: ValidationSelfComponent;
  let fixture: ComponentFixture<ValidationSelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationSelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
