import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationOthersComponent } from './validation-others.component';

describe('ValidationOthersComponent', () => {
  let component: ValidationOthersComponent;
  let fixture: ComponentFixture<ValidationOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
