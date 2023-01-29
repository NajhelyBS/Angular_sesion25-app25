import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { PagesModule } from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


var config = {
  apiKey: "AIzaSyDgIs8RdfLcCgFIG0EwxVvU9bx9wwjYZSs",
  authDomain: "angular-firebasecrud-2ba49.firebaseapp.com",
  projectId: "angular-firebasecrud-2ba49",
  storageBucket: "angular-firebasecrud-2ba49.appspot.com",
  messagingSenderId: "793004336044",
  appId: "1:793004336044:web:cab8198ec6f7b1f37f9009"
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)), 
    provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
