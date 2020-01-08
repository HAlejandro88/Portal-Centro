import { Component, ViewChild } from '@angular/core';
import { IonInput, NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user: string;
  pass: string;
  
  constructor(private navCtrl: NavController, private alertController: AlertController) {}

  Iniciar() {
    if (this.user === 'LuisChavarria' && this.pass === 'chavarriam18') {
      this.navCtrl.navigateForward('/servicio-clientes');
    }
    else if (this.user === 'Miguel' && this.pass === 'miguel48') {
      this.navCtrl.navigateForward('/servicio-clientes');
    }
    else if (this.user === 'User1' && this.pass === 'portalHidromex') {
      this.navCtrl.navigateForward('/servicio-clientes');
    }
    else {
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta de Seguridad',
      subHeader: 'Sin Permiso',
      message: 'Usuario y/o contraseña incorrecta.',
      buttons: ['OK']
    });

    await alert.present();
  }


}
