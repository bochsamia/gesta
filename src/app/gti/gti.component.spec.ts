import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GtiComponent } from './gti.component';

describe('GtiComponent', () => {
  let component: GtiComponent;
  let fixture: ComponentFixture<GtiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GtiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GtiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
