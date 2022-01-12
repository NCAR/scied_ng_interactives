import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HurricaneComponent } from './hurricane.component';

describe('HurricaneComponent', () => {
  let component: HurricaneComponent;
  let fixture: ComponentFixture<HurricaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HurricaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HurricaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
