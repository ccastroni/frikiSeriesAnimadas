import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommunicadoPageRoutingModule } from './communicado-routing.module';

import { CommunicadoPage } from './communicado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommunicadoPageRoutingModule
  ],
  declarations: [CommunicadoPage]
})
export class CommunicadoPageModule {}
