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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  formLogin!: FormGroup;

  constructor(
    private formBuilder:FormBuilder,
    private userservice:UserService,
    private router:Router,
  )
  
  {}

  ngOnInit(): void {
    
    this.formLogin = this.formBuilder.group({
      'email': new FormControl ("", [Validators.required, Validators.email]),
      'password': new FormControl (" ", [Validators.required, Validators.minLength(5)]),

    });

  }


    // | Mensajes de errores de validación
    getErrorMessage() {
      if (this.formLogin.controls['email'].hasError('required')) {
        return 'The email is required';
      }
  
      return this.formLogin.controls['email'].hasError('email') ? 'It needs to be a valid email' : '';
    }
  
    Messagepassword(){
      if (this.formLogin.controls['password'].hasError('required')){
        return 'The password is required';
      }
  
      return this.formLogin.controls['password'].hasError('minlength') ? 'It needs to be at least 5 characters' : '';
  
    }
  
    //Mensajes de erores de validación |



    Logearse(){

      this.userservice.login(this.formLogin.value)
      .then(response => {
        console.log(response);
    
        //alert iniciado con éxito
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Sesión iniciada con éxito',
          showConfirmButton: false,
          timer: 1500
        });
    
        this.router.navigate(['/home']);
    
      })
      .catch(error => 
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No te encuentras registrado',
        })
        ); 
      
    }
  

}
