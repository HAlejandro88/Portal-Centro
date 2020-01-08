import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-especificaciones',
  templateUrl: './especificaciones.page.html',
  styleUrls: ['./especificaciones.page.scss'],
})
export class EspecificacionesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  gasAvion() {
    this.navCtrl.navigateForward('/gasavion');
  }

  turbocina() {
    this.navCtrl.navigateForward('/turbocina');
  }

}
