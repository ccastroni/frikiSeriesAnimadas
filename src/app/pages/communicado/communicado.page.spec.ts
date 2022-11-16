import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommunicadoPage } from './communicado.page';

describe('CommunicadoPage', () => {
  let component: CommunicadoPage;
  let fixture: ComponentFixture<CommunicadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommunicadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
