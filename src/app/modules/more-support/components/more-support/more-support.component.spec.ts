import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreSupportComponent } from './more-support.component';

describe('MoreSupportComponent', () => {
  let component: MoreSupportComponent;
  let fixture: ComponentFixture<MoreSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
