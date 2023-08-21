import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfvalidateComponent } from './confvalidate.component';

describe('ConfvalidateComponent', () => {
  let component: ConfvalidateComponent;
  let fixture: ComponentFixture<ConfvalidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfvalidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfvalidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
