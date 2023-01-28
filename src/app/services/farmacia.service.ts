import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, deleteDoc, doc } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { Farmacia } from '../interfaces/interface';


@Injectable({
  providedIn: 'root'
})


export class FarmaciaService {

  constructor(private fireStore:Firestore) { }

  addProducto(farmacia:Farmacia){
    const farmaciaRef = collection(this.fireStore,'farmacia' );
    return addDoc(farmaciaRef, farmacia);
  }

  getFarmacia():Observable<Farmacia[]> {
    const farmaciaRef = collection(this.fireStore, 'farmacia')
    return collectionData(farmaciaRef, {idField:'id'}) as Observable<Farmacia[]>
  }

  deleteFarmacia(farmacia:Farmacia){
    const farmaciaRef = doc(this.fireStore, `farmacia/${farmacia.id}`)
    return deleteDoc(farmaciaRef);
  }

}
