import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { RegistrarproductoComponent } from './registrarproducto/registrarproducto.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListaproductosComponent,
    RegistrarproductoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListaproductosComponent,
    RegistrarproductoComponent,
  ]
})
export class ComponentsModule { }
