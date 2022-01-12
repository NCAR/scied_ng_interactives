import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HurricanePathComponent } from './hurricane-path.component';

describe('HurricanePathComponent', () => {
  let component: HurricanePathComponent;
  let fixture: ComponentFixture<HurricanePathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HurricanePathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HurricanePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
