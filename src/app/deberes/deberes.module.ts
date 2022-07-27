import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeberesPageRoutingModule } from './deberes-routing.module';

import { DeberesPage } from './deberes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeberesPageRoutingModule
  ],
  declarations: [DeberesPage]
})
export class DeberesPageModule {}
