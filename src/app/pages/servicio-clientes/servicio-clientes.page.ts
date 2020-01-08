import { DataService } from './../../services/data.service';
import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { PickerController, NavController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

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

  clasificacion = '';

  permisos: any[] = [];
  textoBuscar = '';

  constructor(private pickerCtrl: PickerController, private dataService: DataService, private NavCtrl: NavController) { }

  ngOnInit() {
    this.dataService.getEstaciones().subscribe(data => {
      console.log(data);
      this.permisos = data;
    })
  }

  BuscarPermiso(event) {
    console.log(event);
    this.textoBuscar = event.detail.value;
  }

  goInformativo(){
    this.NavCtrl.navigateForward('/servicio-informativo')
  }

  async showPiker() {
    let opts: PickerOptions = {
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
