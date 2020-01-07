import { Component, ViewChild } from '@angular/core';
import { IonInput, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  constructor(private navCtrl: NavController) {}

  Iniciar() {
    console.log("iniciar sesion");
    this.navCtrl.navigateForward('/servicio-clientes'); 
  }

}
