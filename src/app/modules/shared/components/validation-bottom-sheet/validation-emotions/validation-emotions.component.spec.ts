import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationEmotionsComponent } from './validation-emotions.component';

describe('ValidationEmotionsComponent', () => {
  let component: ValidationEmotionsComponent;
  let fixture: ComponentFixture<ValidationEmotionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationEmotionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationEmotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
