import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, ToastController } from '@ionic/angular';
import { CrearTareaPage } from '../crear-tarea/crear-tarea.page';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
})

export class TareasPage implements OnInit {

tareas: any[]=[];

  ngOnInit() {
    this.getItems()
   const item=this.database.getItem();
   console.log('item elegido: ', item);
  }
  todoList = [
     /*{
    itemName: 'Ejemplo tarea',
    itemDate: '08-25-22',
    itemPriority: 'Baja',
    itemCategory: 'Programacion'
  },
  {
    itemName: 'Ejemplo tarea 1',
    itemDate: '07-25-2022',
    itemPriority: 'Alta',
    itemCategory: 'Vision'
  },
  {
    itemName: 'Ejemplo tarea 2',
    itemDate: '07-30-22',
    itemPriority: 'Media',
    itemCategory: 'Calidad'
  }*/]
  loading: any;
  today: number = Date.now();
  path = 'tareas'
  constructor(public modalCtrl: ModalController, public database: DatabaseService,
    public toastController: ToastController,
    public loadingController: LoadingController) { }

  async AddTask() {

    const modal = await this.modalCtrl.create({
      component: CrearTareaPage
    })
    modal.onDidDismiss().then(newtaskObj => {
      //console.log(newtaskObj.data);
      this.todoList.push(newtaskObj.data)
      const data = newtaskObj.data
      data.id = this.database.createId()
      console.log(data)
      const enlace = 'Tareas';
      this.database.newTarea(data, enlace, data.id).then(() => {
        this.mensje('Guardado', 2000);
      })
      //  this.database.newTarea(this.new)
    })
    return await modal.present()

  }
  async mensje(mensaje: string, tiempo: number) {
    const toast = await this.toastController.create({ message: mensaje, duration: tiempo });
    toast.present();
  }

  getItems(){
    const path='Tareas'
    this.database.getCollectionChanges<any>(path).subscribe(res=>{
      console.log(res)
      this.tareas=res
      })
    
  }

  async delete(item:any) {
   await this.database.deleteTarea<any>('Tareas', item.id).catch(res=>{
    console.log(res)});
    console.log('item eliminado', item)
  }
   editItem(item:any){
    this.database.setItem(item)
    console.log('item a editar', item)
    
  }
}

