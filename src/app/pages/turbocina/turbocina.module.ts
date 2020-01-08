import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurbocinaPageRoutingModule } from './turbocina-routing.module';

import { TurbocinaPage } from './turbocina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurbocinaPageRoutingModule
  ],
  declarations: [TurbocinaPage]
})
export class TurbocinaPageModule {}
