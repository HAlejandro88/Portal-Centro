import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServicioInformativoPage } from './servicio-informativo.page';

describe('ServicioInformativoPage', () => {
  let component: ServicioInformativoPage;
  let fixture: ComponentFixture<ServicioInformativoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioInformativoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServicioInformativoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
