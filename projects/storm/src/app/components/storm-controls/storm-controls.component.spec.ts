import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StormControlsComponent } from './storm-controls.component';

describe('StormControlsComponent', () => {
  let component: StormControlsComponent;
  let fixture: ComponentFixture<StormControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StormControlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StormControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
