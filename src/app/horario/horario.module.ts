import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorarioPageRoutingModule } from './horario-routing.module';
import { NgCalendarModule  } from 'ionic2-calendar';
import { HorarioPage } from './horario.page';

@NgModule({
  imports: [NgCalendarModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HorarioPageRoutingModule
  ],
  declarations: [HorarioPage]
})
export class HorarioPageModule {}
