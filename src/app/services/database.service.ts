import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  editItem: any;

  public isLogged: any = false;
  constructor(public databases: AngularFirestore) {
  }
  newTarea<tipo>(datos: tipo, path: string, id: string) {
    const collection: AngularFirestoreCollection<tipo> = this.databases.collection<tipo>(path);
    /* const collection=this.databases.collection(path);
     return collection.doc(id).set(datos);
     
   */
    return collection.doc(id).set(datos);
  }
  createId() {
    return this.databases.createId();
  }

  deleteTarea<tipo>(path: string, id: string) {
      const ref=this.databases.collection<tipo>(path);
      return ref.doc(id).delete();
 
  }
  getCollectionChanges<tipo>(path: string): Observable<tipo[]> {
    const ref = this.databases.collection<tipo>(path);
    return ref.valueChanges();

  }
  setItem(item: any) {
    this.editItem = item;
    //console.log(this.editItem);
  }
  getItem() {
    return this.editItem;
  }
}
