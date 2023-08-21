import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LmbComponent } from './lmb.component';

describe('LmbComponent', () => {
  let component: LmbComponent;
  let fixture: ComponentFixture<LmbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LmbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LmbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
