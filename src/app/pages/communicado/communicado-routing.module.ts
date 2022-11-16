import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommunicadoPage } from './communicado.page';

const routes: Routes = [
  {
    path: '',
    component: CommunicadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunicadoPageRoutingModule {}
