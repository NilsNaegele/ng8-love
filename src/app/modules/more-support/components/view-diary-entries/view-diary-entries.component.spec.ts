import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiaryEntriesComponent } from './view-diary-entries.component';

describe('ViewDiaryEntriesComponent', () => {
  let component: ViewDiaryEntriesComponent;
  let fixture: ComponentFixture<ViewDiaryEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDiaryEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiaryEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
