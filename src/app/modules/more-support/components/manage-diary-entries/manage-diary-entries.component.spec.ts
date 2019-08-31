import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageDiaryEntriesComponent } from './manage-diary-entries.component';

describe('ManageDiaryEntriesComponent', () => {
  let component: ManageDiaryEntriesComponent;
  let fixture: ComponentFixture<ManageDiaryEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageDiaryEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageDiaryEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
