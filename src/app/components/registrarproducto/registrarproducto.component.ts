import { Component, OnInit } from '@angular/core';
import { Farmacia } from '../../interfaces/interface';
import { FarmaciaService } from 'src/app/services/farmacia.service';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-registrarproducto',
  templateUrl: './registrarproducto.component.html',
  styleUrls: ['./registrarproducto.component.css']
})
export class RegistrarproductoComponent implements OnInit  {

  public RegistroProducto!: FormGroup;

  constructor(
    private farmaciaservice:FarmaciaService, 
    private router:Router, 
    private formBuilder:FormBuilder){}

    ngOnInit(): void {
      this.RegistroProducto = this.formBuilder.group({
        producto:['',[
          Validators.required,
          Validators.minLength(4)
        ]] ,
        costo:['',[
          Validators.required,
        ]] ,
        imagen:['',[
          Validators.required,
        ]]
      })

    }
  
    async onSubmit() {
      this.farmaciaservice.addProducto(this.RegistroProducto.value).then( response => {
        console.log(response)
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: 'El producto ha sido registrado correctamente.'
        });
        this.router.navigate(['/listar']);
      })
      .catch( error => {
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Hubo un problema al agregar el producto, por favor intente de nuevo.'
        });
      });
    }


}
