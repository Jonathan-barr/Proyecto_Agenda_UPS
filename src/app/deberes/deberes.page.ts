import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-deberes',
  templateUrl: './deberes.page.html',
  styleUrls: ['./deberes.page.scss'],
})
export class DeberesPage implements OnInit {
  title:string;
  description:string;
  startTime:string;
  endTime:string;
  img:string;
  constructor(public modalController:ModalController, public navParams:NavParams) { 
    this.title=navParams.get('title');
    this.description=navParams.get('description');
    this.img=navParams.get('img');
    this.startTime=navParams.get('startTime');
    this.endTime=navParams.get('endTime');
  }
  close(){
    this.modalController.dismiss();
  }
  ngOnInit() {
  }

}
