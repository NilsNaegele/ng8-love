import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisMgtComponent } from './crisis-mgt.component';

describe('CrisisMgtComponent', () => {
  let component: CrisisMgtComponent;
  let fixture: ComponentFixture<CrisisMgtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisMgtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
