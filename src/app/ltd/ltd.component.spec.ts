import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtdComponent } from './ltd.component';

describe('LtdComponent', () => {
  let component: LtdComponent;
  let fixture: ComponentFixture<LtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
