import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CalendarComponent } from 'ionic2-calendar';
import { CalendarMode } from 'ionic2-calendar/calendar';
import { DeberesPage } from '../deberes/deberes.page';


@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage implements OnInit {
  eventSource=[];
  currentMonth: string;
  calendar={
    mode:'month'as CalendarMode ,
    currentDate: new Date(),
  };
  
  newEvent:any ={
    title:'',
    description:'',
    startTime:'',
    endTime:'',
    img:''
  }
  showAddEvent:boolean;
  @ViewChild(CalendarComponent,null) myCal:CalendarComponent;

  
  myData=[
    {
      title:'Mi primer evento',
      description:'Eventos',
      startTime:new Date(2022,5,15,15,16),
      endTime:  new Date(2022,5,15,15,9),
      img:'https://picsum.photos/200',
    }
  ];
  constructor(public modalController:ModalController) { 

  }
  onViewTitleChanged(title:string){
    this.currentMonth=title;
    console.log(title);
  }
 async onEventSelected(event){
    this.newEvent=event;
    const modal=await this.modalController.create({
      component:DeberesPage,
      componentProps: event
    })
    return await modal.present();
    console.log('Event selectd: '+event.startTime+'-'+event.endTime+','+event.title);
  }
  onTimeSelected(event){
    this.newEvent=event;
    console.log('Select time: '+event.selectTime+', hasEvents: '+(event.events !=undefined && event.events.length !==0)+', disable'+event.disable);
  }
  onCurrentDateChanged(event: Date){
    console.log('current date change: '+event);
  }
  onRangeChanged(ev){
    console.log('range changed: startTime: '+ ev.startTime+', endTime '+ev.endTime);

  }
  back(){
    this.myCal.slidePrev();
  }
  next(){
    this.myCal.slideNext();
  }
  showHideForm(){
    this.showAddEvent=!this.showAddEvent;
    this.newEvent={
      title:'',
      description:'',
      startTime:new Date().toISOString(),
      endTime:new Date().toISOString(),
      img:'',
    }
  }
  today(){
    this.calendar.currentDate=new Date();
  }
  changeMode(mode){
    this.calendar.mode=mode;
  }
  addEvent(){
    this.eventSource.push({
      title:this.newEvent.title,
      description:this.newEvent.description,
      startTime:new Date(this.newEvent.startTime),
      endTime:new Date(this.newEvent.startTime),
      img:this.newEvent.img,
    })
    console.log(this.newEvent);
  }

/** no tocar */
 
  ngOnInit() {
    this.eventSource= this.myData;
  }


}
