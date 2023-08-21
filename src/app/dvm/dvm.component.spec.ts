import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DvmComponent } from './dvm.component';

describe('DvmComponent', () => {
  let component: DvmComponent;
  let fixture: ComponentFixture<DvmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DvmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
