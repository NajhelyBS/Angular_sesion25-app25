import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ListaproductosComponent } from './listaproductos/listaproductos.component';
import { RegistrarproductoComponent } from './registrarproducto/registrarproducto.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ListaproductosComponent,
    RegistrarproductoComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
   
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    ListaproductosComponent,
    RegistrarproductoComponent,
  ]
})
export class ComponentsModule { }
