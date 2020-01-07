import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioClientesPageRoutingModule } from './servicio-clientes-routing.module';

import { ServicioClientesPage } from './servicio-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioClientesPageRoutingModule
  ],
  declarations: [ServicioClientesPage]
})
export class ServicioClientesPageModule {}
