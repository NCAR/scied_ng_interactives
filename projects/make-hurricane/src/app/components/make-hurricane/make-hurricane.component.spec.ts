import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SciedFooterModule } from '../../core/modules/scied-footer/scied-footer.module';
import { RouterTestingModule } from '@angular/router/testing';
import { WebappService } from '../../core/services/webapp/webapp.service';
import { MockWebappService } from '../../core/services/webapp/webapp.service.mock';
import { MakeHurricaneComponent } from './make-hurricane.component';

describe('MakeHurricaneComponent', () => {
  let component: MakeHurricaneComponent;
  let fixture: ComponentFixture<MakeHurricaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        SciedFooterModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: WebappService,
          useClass: MockWebappService
        }
      ],
      declarations: [ MakeHurricaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeHurricaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
