import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SciedFooterModule } from '../../core/modules/scied-footer/scied-footer.module';
import { WebappService } from '../../core/services/webapp/webapp.service';
import { MockWebappService } from '../../core/services/webapp/webapp.service.mock';
import { CreateSnowstormComponent } from './create-snowstorm.component';

describe('CreateSnowstormComponent', () => {
  let component: CreateSnowstormComponent;
  let fixture: ComponentFixture<CreateSnowstormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SciedFooterModule
      ],
      providers: [
        {
          provide: WebappService,
          useClass: MockWebappService
        }
      ],
      declarations: [ CreateSnowstormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSnowstormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
