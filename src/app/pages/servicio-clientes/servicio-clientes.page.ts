import { DataService } from './../../services/data.service';
import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { PickerController, NavController, AlertController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';

@Component({
  selector: 'app-servicio-clientes',
  templateUrl: './servicio-clientes.page.html',
  styleUrls: ['./servicio-clientes.page.scss'],
})
export class ServicioClientesPage implements OnInit {

  permiso: string;
  razonSocial: string;

  fecha = new Date();
  dia = this.fecha.getDay();
  year = this.fecha.getFullYear();

  hoy = `${this.dia}/Enero/${this.year}`;

  clasificacion = '';

  textoBuscar = '';


  constructor(private pickerCtrl: PickerController, private navCtrl: NavController,private alertController:AlertController) { }

  ngOnInit() {
  }

  BuscarPermiso(event) {
    console.log(event);
    this.textoBuscar = event.detail.value;
  }

  goInformativo(){  
    if (this.permiso === "PL/658/EXP/ES/2015" || this.razonSocial === 'ESTACION DE SERVICIO CALAFIA, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/902/EXP/ES/2015" || this.razonSocial === 'DIGEPE, S.A. DE C.V. (07356)') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/760/EXP/ES/2015" || this.razonSocial === 'DIAZ GAS, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/825/EXP/ES/2015" || this.razonSocial === 'COMBU-EXPRESS, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/585/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/842/EXP/ES/2015" || this.razonSocial === 'ESTACION RAEL, S. DE R.L. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/371/EXP/ES/2015" || this.razonSocial === 'MULTISERVICIOS LA PILARICA SA DE CV') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/439/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/860/EXP/ES/2015" || this.razonSocial === 'ESTACION RAEL, S. DE R.L. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/897/EXP/ES/2015" || this.razonSocial === 'INMOBILIARIA ESCOGAS SA DE CV') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/561/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/797/EXP/ES/2015" || this.razonSocial === 'AUTOSERVICIO BERLANGA S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/583/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/366/EXP/ES/2015" || this.razonSocial === 'GRUPO OCTANO, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/635/EXP/ES/2015" || this.razonSocial === 'CIRCULO DOS, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/868/EXP/ES/2015" || this.razonSocial === 'Servicio Sevilla, S.A. de C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/558/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/887/EXP/ES/2015" || this.razonSocial === 'GASOLINERA HUITEPEC, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/454/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/890/EXP/ES/2015" || this.razonSocial === 'ENERGIA Y SERVICIOS COORDINADOS, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/756/EXP/ES/2015" || this.razonSocial === 'SERVICIO SIERRA DE ARTEAGA SA DE CV') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/795/EXP/ES/2015" || this.razonSocial === 'COMBUSTIBLES Y LUBRICANTES ATENAS SA DE CV') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/505/EXP/ES/2015" || this.razonSocial === 'GRUPO OCTANO, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/708/EXP/ES/2015" || this.razonSocial === 'Becktrop Operadora SA de CV') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/562/EXP/ES/2015" || this.razonSocial === 'YLIGARZA S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/636/EXP/ES/2015" || this.razonSocial === 'ESTACION LA VICTORIA, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/516/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/638/EXP/ES/2015" || this.razonSocial === 'ESTACION LA VICTORIA, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/538/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/619/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/443/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/689/EXP/ES/2015" || this.razonSocial === 'RAMCAL SA DE CV.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/650/EXP/ES/2015" || this.razonSocial === 'Gasomac, S.A. de C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/866/EXP/ES/2015" || this.razonSocial === 'Autoconsumo los Pinos, S.A. de C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/380/EXP/ES/2015" || this.razonSocial === 'SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/764/EXP/ES/2015" || this.razonSocial === 'servicios energeticos plaza industrial sa de cv') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/851/EXP/ES/2015" || this.razonSocial === 'SERVICIOS GASOLINEROS DE MEXICO, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/754/EXP/ES/2015" || this.razonSocial === 'OLEUM GAS S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/397/EXP/ES/2015" || this.razonSocial === 'SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/823/EXP/ES/2015" || this.razonSocial === 'GasolinerÃ­a Cid, S.A. de C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/627/EXP/ES/2015" || this.razonSocial === 'GasolinerÃ­a Perseo, S.A. de C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/408/EXP/ES/2015" || this.razonSocial === 'MULTISERVICIOS LA PILARICA SA DE CV') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/580/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/489/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/465/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/724/EXP/ES/2015" || this.razonSocial === 'ERVICIO AVENIDA, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/829/EXP/ES/2015" || this.razonSocial === 'ESTACION DE SERVICIO LEON, S.DER.L. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/584/EXP/ES/2015" || this.razonSocial === 'PETROMAX, S.A. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/710/EXP/ES/2015" || this.razonSocial === 'ESTACION DE SERVICIO PITS, S. DE R.L. DE C.V.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/858/EXP/ES/2015" || this.razonSocial === 'GRUPO GOCALVI SA DE CV.') {
      this.navCtrl.navigateForward('/servicio-informativo')
    }
    else if (this.permiso === "PL/690/EXP/ES/2016" || this.razonSocial === "Gasolinera Segovia, S.A. de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2017" || this.razonSocial === "SERVICIO LOS OLIVOS S.A. DE C.V.(E4394)"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2018" || this.razonSocial === "MULTISERVICIOS LA PILARICA SA DE CV "){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2019" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2020" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2021" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2022" || this.razonSocial === "Inmobiliaria Corredor TultitlÃ¡n, S.A. de C.V. "){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2023" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2024" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2025" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2026" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2027" || this.razonSocial === "CRUCERO LAS GOLONDRINAS,SA DE CV"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2028" || this.razonSocial === "Becktrop Operadora SA de CV"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2029" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2030" || this.razonSocial === "ESTACION RAEL, S. DE R.L. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2031" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2032" || this.razonSocial === "ESTACION DE SERVICIO AUTOMOTRIZ DEL NORTE SA DE CV"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2033" || this.razonSocial === "SERVICIO CIBOLA, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2034" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2035" || this.razonSocial === "MULTISERVICIOS SIGAS S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2036" || this.razonSocial === "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2037" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2038" || this.razonSocial === "Servicio Vega Atizapan, S.A. de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2039" || this.razonSocial === "ESTACION RAEL, S. DE R.L. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2040" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2041" || this.razonSocial === "ESTACION RAMOS, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2042" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2043" || this.razonSocial === "ESTACION DE SERVICIO LEON, S.DER.L. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2044" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2045" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2046" || this.razonSocial === "PETROLIFEROS LA TERRITORIAL, S. DE R.L. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2047" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2048" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2049" || this.razonSocial === "SERVICIO DEL CENTRO HIDALGO SA DE CV "){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2050" || this.razonSocial === "SERV.EL TRIANGULO DEL REFUGIO,S.DER.L.DEC.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2051" || this.razonSocial === "AMC COMBUSTIBLES Y LUBRICANTES S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2052" || this.razonSocial === "SERVICIO RAMA, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2053" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2054" || this.razonSocial === "Servicio Ravello S.A de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2055" || this.razonSocial === "ESTACION RAEL, S. DE R.L. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2056" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2057" || this.razonSocial === "INMOBILIARIA ANADECA, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2058" || this.razonSocial === "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2059" || this.razonSocial === "MARA ESTACION DE SERVICIOS SA DE CV"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2060" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2061" || this.razonSocial === "SERVICIO OROZCO SA DE CV"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2062" || this.razonSocial === "Servicio Puerta de Hierro S.A. de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2063" || this.razonSocial === "GasolinerÃ­a Real Madeira, S.A. de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2064" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2015" || this.razonSocial === "Socombumex, S.A. de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2016" || this.razonSocial === "GasolinerÃ­a Segovia, S.A. de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2017" || this.razonSocial === "SERVICIO LOS OLIVOS S.A. DE C.V.(E4394)"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2018" || this.razonSocial === "MULTISERVICIOS LA PILARICA SA DE CV "){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2019" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2020" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2021" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2022" || this.razonSocial === "Inmobiliaria Corredor TultitlÃ¡n, S.A. de C.V. "){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2023" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2024" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2025" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2026" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2027" || this.razonSocial === "CRUCERO LAS GOLONDRINAS,SA DE CV"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2028" || this.razonSocial === "Becktrop Operadora SA de CV"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2029" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2030" || this.razonSocial === "ESTACION RAEL, S. DE R.L. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2031" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2032" || this.razonSocial === "ESTACION DE SERVICIO AUTOMOTRIZ DEL NORTE SA DE CV"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2033" || this.razonSocial === "SERVICIO CIBOLA, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2034" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2035" || this.razonSocial === "MULTISERVICIOS SIGAS S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2036" || this.razonSocial === "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2037" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2038" || this.razonSocial === "Servicio Vega Atizapan, S.A. de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2039" || this.razonSocial === "ESTACION RAEL, S. DE R.L. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2040" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2041" || this.razonSocial === "ESTACION RAMOS, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2042" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2043" || this.razonSocial === "ESTACION DE SERVICIO LEON, S.DER.L. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2044" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2045" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2046" || this.razonSocial === "PETROLIFEROS LA TERRITORIAL, S. DE R.L. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2047" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2048" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2049" || this.razonSocial === "SERVICIO DEL CENTRO HIDALGO SA DE CV "){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2050" || this.razonSocial === "SERV.EL TRIANGULO DEL REFUGIO,S.DER.L.DEC.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2051" || this.razonSocial === "AMC COMBUSTIBLES Y LUBRICANTES S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2052" || this.razonSocial === "SERVICIO RAMA, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2053" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2054" || this.razonSocial === "Servicio Ravello S.A de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2055" || this.razonSocial === "ESTACION RAEL, S. DE R.L. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2056" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2057" || this.razonSocial === "INMOBILIARIA ANADECA, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2058" || this.razonSocial === "SERVICIOS DEL VALLE DEL FUERTE, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2059" || this.razonSocial === "MARA ESTACION DE SERVICIOS SA DE CV"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2060" || this.razonSocial === "GRUPO OCTANO, S.A. DE C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2061" || this.razonSocial === "SERVICIO OROZCO SA DE CV"){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2062" || this.razonSocial === "Servicio Puerta de Hierro S.A. de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
  else if (this.permiso === "PL/690/EXP/ES/2063" || this.razonSocial === "GasolinerÃ­a Real Madeira, S.A. de C.V."){
      this.navCtrl.navigateForward('/servicio-informativo')
  }
   else if (this.permiso === "PL/690/EXP/ES/2064" || this.razonSocial === "PETROMAX, S.A. DE C.V."){
      this.alertaEntrante();
   }
   else {
     this.noExiste();
   }

  }

  async alertaEntrante() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: '',
      message: `tu Busqueda fue ${this.permiso} o ${this.razonSocial} `,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.navCtrl.navigateForward('/servicio-informativo');
          }
        }
      ]
    });

    await alert.present();
  }

  async noExiste() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Warning',
      message: 'No fue encontrado el Permiso o razon Social',
      buttons: ['OK']
    });

    await alert.present();
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
  portal(){
    this.navCtrl.navigateForward('/programa-interactivo');
    }
   
}
