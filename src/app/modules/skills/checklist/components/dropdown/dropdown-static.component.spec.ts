import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownStaticComponent } from '../dropdown-static.component';

describe('DropdownStaticComponent', () => {
  let component: DropdownStaticComponent;
  let fixture: ComponentFixture<DropdownStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdownStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
