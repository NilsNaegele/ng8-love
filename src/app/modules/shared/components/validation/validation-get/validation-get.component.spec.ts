import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationGetComponent } from './validation-get.component';

describe('ValidationGetComponent', () => {
  let component: ValidationGetComponent;
  let fixture: ComponentFixture<ValidationGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
