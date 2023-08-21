import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeeplinkiosComponent } from './deeplinkios.component';

describe('DeeplinkiosComponent', () => {
  let component: DeeplinkiosComponent;
  let fixture: ComponentFixture<DeeplinkiosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeeplinkiosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeeplinkiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
