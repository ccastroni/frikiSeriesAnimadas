import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContadorPage } from './contador.page';

describe('ContadorPage', () => {
  let component: ContadorPage;
  let fixture: ComponentFixture<ContadorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContadorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
