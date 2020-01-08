import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
