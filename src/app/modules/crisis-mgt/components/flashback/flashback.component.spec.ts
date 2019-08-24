import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashbackComponent } from './flashback.component';

describe('FlashbackComponent', () => {
  let component: FlashbackComponent;
  let fixture: ComponentFixture<FlashbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlashbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlashbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
