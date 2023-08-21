import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfdeleteComponent } from './confdelete.component';

describe('ConfdeleteComponent', () => {
  let component: ConfdeleteComponent;
  let fixture: ComponentFixture<ConfdeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfdeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfdeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
