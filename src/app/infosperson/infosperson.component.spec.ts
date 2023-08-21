import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfospersonComponent } from './infosperson.component';

describe('InfospersonComponent', () => {
  let component: InfospersonComponent;
  let fixture: ComponentFixture<InfospersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfospersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfospersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
