import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
import { RegistrarproductoComponent } from './components/registrarproducto/registrarproducto.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:"", component:RegisterComponent},
  {path:"login", component:LoginComponent},
  {path:"home", component:HomeComponent,
  children: [
    {path:"añadir", component:RegistrarproductoComponent},
    {path:"lista", component:ListaproductosComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
