import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../todo.service';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.page.html',
  styleUrls: ['./crear-tarea.page.scss'],
})
export class CrearTareaPage implements OnInit {


  categorias = [/*'Vision', 'Calidad', 'Moviles', 'Escritura'*/]

  newtaskObj = {}
  nombreTarea
  fechaTarea
  prioridadTarea
  categoriaTarea
  taskObject
  idTarea
  constructor(public modalCtrl: ModalController, public todoService: TodoService, public database: DatabaseService) { }

  ngOnInit() {
   
    this.categorias.push('Vision')
    this.categorias.push('Calidad')
    this.categorias.push('Moviles')
    this.categorias.push('Escritura')
    const item = this.database.getItem();
    //console.log('item a editar: ', item);
    if (item !== undefined) {
      this.taskObject = item;
      console.log('item elegido: ', item);
    }
  //
  }
  async dissmis() {
    await this.modalCtrl.dismiss(this.taskObject)
  }
  categoriaSeleccionada(index) {
    this.categoriaTarea = this.categorias[index]
  }
  adicionarTarea() {
    this.taskObject = ({
      nombreItem: this.nombreTarea,
      fechaItem: this.fechaTarea,
      prioridadItem: this.prioridadTarea,
      categoriaItem: this.categoriaTarea
    })
    this.dissmis()
  }
  /**
  editItem(item:any){
    this.database.setItem(item)
    //console.log('item a editar', item)
    
  }
   */
}
