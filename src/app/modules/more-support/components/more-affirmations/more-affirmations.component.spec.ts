import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreAffirmationsComponent } from './more-affirmations.component';

describe('MoreAffirmationsComponent', () => {
  let component: MoreAffirmationsComponent;
  let fixture: ComponentFixture<MoreAffirmationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreAffirmationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreAffirmationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
