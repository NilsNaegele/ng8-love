import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationRelationshipsComponent } from './validation-relationships.component';

describe('ValidationRelationshipsComponent', () => {
  let component: ValidationRelationshipsComponent;
  let fixture: ComponentFixture<ValidationRelationshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationRelationshipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationRelationshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
