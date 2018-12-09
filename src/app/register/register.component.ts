import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form:FormGroup;

  constructor() {
    this.form = new FormGroup({
        email: new FormControl('',[Validators.required,Validators.email,Validators.maxLength(40)]),
        
    /*Minimo 8 caracteres Maximo 15 Al menos una letra mayúscula Al menos una letra minucula Al menos un dígito No espacios en blanco Al menos 1 caracter especial*/

        contrasena: new FormControl(''/*,[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/)]*/),
        nombre: new FormControl('',[Validators.required,Validators.maxLength(40),Validators.minLength(3)]),
        edad: new FormControl('',[Validators.required]),
        municipio: new FormControl(),
        provincia: new FormControl(),
        postal: new FormControl('',[Validators.minLength(5),Validators.maxLength(5)]),
        curso: new FormControl('',[Validators.required])
    });
   }

  ngOnInit() {
  }

  usuarioRegistrado(data){
   //En este método hay que ordenar al servidor que haga un insert de usuario en la base de datos.
    console.log(data);
  }

}
