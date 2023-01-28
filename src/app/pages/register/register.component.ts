import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
// ES6 Modules or TypeScript
import Swal from 'sweetalert2';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  hide = true;

  formRegister!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private userservice:UserService,
    private router:Router,
  )
  
  {}

  
  ngOnInit(): void {
    
    this.formRegister = this.formBuilder.group({
      'email': new FormControl ("", [Validators.required, Validators.email]),
      'password': new FormControl (" ", [Validators.required, Validators.minLength(5)]),

    });

  }


  // | Mensajes de errores de validación
  getErrorMessage() {
    if (this.formRegister.controls['email'].hasError('required')) {
      return 'The email is required';
    }

    return this.formRegister.controls['email'].hasError('email') ? 'It needs to be a valid email' : '';
  }

  Messagepassword(){
    if (this.formRegister.controls['password'].hasError('required')){
      return 'The password is required';
    }

    return this.formRegister.controls['password'].hasError('minlength') ? 'It needs to be at least 5 characters' : '';

  }

  //Mensajes de erores de validación |


  //Enviar datos a Firebase
  onSubmit(){
    this.userservice.register(this.formRegister.value)
    .then(response => {
      console.log(response);
  
      //alert registro exitoso
      Swal.fire({
        title: 'Genial!',
        text: 'Registro exitoso.',
        imageUrl: 'https://media.tenor.com/KgTaOloE588AAAAC/anime-like.gif',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'imagen',
      })
  
      this.router.navigate(['/login']);
  
    })
    .catch(error =>  {

      console.log(error);
  
      //alert registro exitoso
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Datos faltantes o incorrectos',
      })
  
  
    })
   
  }
  
  
  }

