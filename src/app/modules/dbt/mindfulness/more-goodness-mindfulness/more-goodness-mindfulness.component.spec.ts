import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreGoodnessMindfulnessComponent } from './more-goodness-mindfulness.component';

describe('MoreGoodnessMindfulnessComponent', () => {
  let component: MoreGoodnessMindfulnessComponent;
  let fixture: ComponentFixture<MoreGoodnessMindfulnessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreGoodnessMindfulnessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreGoodnessMindfulnessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
