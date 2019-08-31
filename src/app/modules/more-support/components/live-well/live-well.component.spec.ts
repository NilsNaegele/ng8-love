import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveWellComponent } from './live-well.component';

describe('LiveWellComponent', () => {
  let component: LiveWellComponent;
  let fixture: ComponentFixture<LiveWellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveWellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
