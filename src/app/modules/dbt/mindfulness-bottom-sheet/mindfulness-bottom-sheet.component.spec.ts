import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MindfulnessBottomSheetComponent } from './mindfulness-bottom-sheet.component';

describe('MindfulnessBottomSheetComponent', () => {
  let component: MindfulnessBottomSheetComponent;
  let fixture: ComponentFixture<MindfulnessBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MindfulnessBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MindfulnessBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
