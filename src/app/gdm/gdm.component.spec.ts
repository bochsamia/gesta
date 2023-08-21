import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdmComponent } from './gdm.component';

describe('GdmComponent', () => {
  let component: GdmComponent;
  let fixture: ComponentFixture<GdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
