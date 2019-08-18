import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationBottomSheetComponent } from './validation-bottom-sheet.component';

describe('ValidationBottomSheetComponent', () => {
  let component: ValidationBottomSheetComponent;
  let fixture: ComponentFixture<ValidationBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
