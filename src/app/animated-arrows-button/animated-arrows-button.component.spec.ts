import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedArrowsButtonComponent } from './animated-arrows-button.component';

describe('AnimatedArrowsButtonComponent', () => {
  let component: AnimatedArrowsButtonComponent;
  let fixture: ComponentFixture<AnimatedArrowsButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimatedArrowsButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimatedArrowsButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
