import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EspecificacionesPageRoutingModule } from './especificaciones-routing.module';

import { EspecificacionesPage } from './especificaciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EspecificacionesPageRoutingModule
  ],
  declarations: [EspecificacionesPage]
})
export class EspecificacionesPageModule {}
