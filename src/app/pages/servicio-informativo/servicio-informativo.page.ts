import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-servicio-informativo',
  templateUrl: './servicio-informativo.page.html',
  styleUrls: ['./servicio-informativo.page.scss'],
})
export class ServicioInformativoPage implements OnInit {

  fecha = new Date();
  dia = this.fecha.getDay();
  year = this.fecha.getFullYear();

  hoy = `${this.dia}/Enero/${this.year}`;

  turno = '';

  constructor(private pickerCtrl: PickerController) { }

  async mostrarPicker() {
    let opts: PickerOptions = {
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Listo'
        }
      ],
      columns: [
        {
          name: 'turno',
          options:[
            { text: 'Turno 1', value: 'A' },
            { text: 'Turno 2', value: 'B' },
          ]
        }
      ]
    };
    let picker = await this.pickerCtrl.create(opts);
    picker.present();
    picker.onDidDismiss().then( async data => {
      let col = await picker.getColumn('turno');
      this.turno = col.options[col.selectedIndex].text;
    });
  }

  ngOnInit() {
  }

}