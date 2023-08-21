import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpgComponent } from './spg.component';

describe('SpgComponent', () => {
  let component: SpgComponent;
  let fixture: ComponentFixture<SpgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
