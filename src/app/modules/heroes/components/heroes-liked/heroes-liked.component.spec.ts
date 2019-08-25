import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesLikedComponent } from './heroes-liked.component';

describe('HeroesLikedComponent', () => {
  let component: HeroesLikedComponent;
  let fixture: ComponentFixture<HeroesLikedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesLikedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesLikedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
