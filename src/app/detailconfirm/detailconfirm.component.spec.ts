import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailconfirmComponent } from './detailconfirm.component';

describe('DetailconfirmComponent', () => {
  let component: DetailconfirmComponent;
  let fixture: ComponentFixture<DetailconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
