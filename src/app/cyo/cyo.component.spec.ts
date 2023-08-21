import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CyoComponent } from './cyo.component';

describe('CyoComponent', () => {
  let component: CyoComponent;
  let fixture: ComponentFixture<CyoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CyoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
