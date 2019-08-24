import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomSkillsComponent } from './random-skills.component';

describe('RandomSkillsComponent', () => {
  let component: RandomSkillsComponent;
  let fixture: ComponentFixture<RandomSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
