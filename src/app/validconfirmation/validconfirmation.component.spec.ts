import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidconfirmationComponent } from './validconfirmation.component';

describe('ValidconfirmationComponent', () => {
  let component: ValidconfirmationComponent;
  let fixture: ComponentFixture<ValidconfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidconfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
