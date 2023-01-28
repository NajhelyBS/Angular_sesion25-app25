import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth:Auth) { }

  //registrar datos en firebase
  register({email, password}:any){
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  //validar login
  login({email, password}:any){
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  //salir
  logout(){
    return signOut(this.auth);
  }

}
