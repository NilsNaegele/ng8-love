import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCollectionComponent } from './skills-collection.component';

describe('SkillsCollectionComponent', () => {
  let component: SkillsCollectionComponent;
  let fixture: ComponentFixture<SkillsCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
