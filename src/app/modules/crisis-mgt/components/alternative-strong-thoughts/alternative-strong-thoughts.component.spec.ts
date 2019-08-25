import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeStrongThoughtsComponent } from './alternative-strong-thoughts.component';

describe('AlternativeStrongThoughtsComponent', () => {
  let component: AlternativeStrongThoughtsComponent;
  let fixture: ComponentFixture<AlternativeStrongThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeStrongThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeStrongThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
