import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicioInformativoPageRoutingModule } from './servicio-informativo-routing.module';

import { ServicioInformativoPage } from './servicio-informativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicioInformativoPageRoutingModule
  ],
  declarations: [ServicioInformativoPage]
})
export class ServicioInformativoPageModule {}
