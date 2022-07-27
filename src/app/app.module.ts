import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import{AngularFireModule} from '@angular/fire/compat';
import{AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NgCalendarModule  } from 'ionic2-calendar';
import { IonicStorageModule } from '@ionic/storage-angular';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [AppComponent],
  imports: [ NgCalendarModule,
    BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule, 
     IonicStorageModule.forRoot(),
     AngularFireModule.initializeApp(environment.firebaseConfig),
     AngularFirestoreModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
