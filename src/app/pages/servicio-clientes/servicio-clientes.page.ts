import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-servicio-clientes',
  templateUrl: './servicio-clientes.page.html',
  styleUrls: ['./servicio-clientes.page.scss'],
})
export class ServicioClientesPage implements OnInit {

  fecha = new Date();
  dia = this.fecha.getDay();
  year = this.fecha.getFullYear();

  hoy = `${this.dia}/Enero/${this.year}`;

  clasificacion: '';

  constructor(private pickerCtrl: PickerController) { }

  ngOnInit() {
  }

  BuscarServicio() {}

  async showPiker() {
    let opts: PickerController = {
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancelar'
        },
        {
          text: 'Ok'
        }
      ],
      columns: [
        {
          name: 'Clasificación',
          options: [
            { text:'Grupos de Estaciones especialisados', value: 'Grupos'},
            { text:'Estaciones de Sevicio Individuales', value: 'Estaciones'},
            { text:'Distribuidora A', value: 'Distribuidora'},
            { text:'PEMEX', value: 'pemex'},
            { text:'ASA', value: 'asa'}
          ]
        }
      ]
    };

    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then(async data => {
      let col = await picker.getColumn('Clasificación');
      console.log('col', col);
      this.clasificacion = col.options[col.selectedIndex].text;
    })
  }
}
