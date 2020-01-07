import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpcionesConsultarPageRoutingModule } from './opciones-consultar-routing.module';

import { OpcionesConsultarPage } from './opciones-consultar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpcionesConsultarPageRoutingModule
  ],
  declarations: [OpcionesConsultarPage]
})
export class OpcionesConsultarPageModule {}
