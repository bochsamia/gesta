import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtdComponent } from './gtd.component';

describe('GtdComponent', () => {
  let component: GtdComponent;
  let fixture: ComponentFixture<GtdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
