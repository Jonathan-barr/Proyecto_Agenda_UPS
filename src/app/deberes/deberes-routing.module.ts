import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeberesPage } from './deberes.page';

const routes: Routes = [
  {
    path: '',
    component: DeberesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeberesPageRoutingModule {}
