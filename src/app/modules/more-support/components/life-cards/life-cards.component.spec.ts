import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCardsComponent } from './life-cards.component';

describe('LifeCardsComponent', () => {
  let component: LifeCardsComponent;
  let fixture: ComponentFixture<LifeCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
