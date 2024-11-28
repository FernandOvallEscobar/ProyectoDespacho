import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonCard, IonCardContent, IonInput, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton, IonInputPasswordToggle, IonText  } from '@ionic/angular/standalone';

import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonButton, IonInputPasswordToggle, IonText, CommonModule, FormsModule, ReactiveFormsModule]
})    
export class LoginPage implements OnInit {

  constructor(private router : Router) { }

  //Agregar ReactiveFormsModule
  //variable no inicializada
  form!: FormGroup

  ngOnInit() {
    //Validaciones reactivas
    this.form = new FormGroup({
      email: new FormControl(null,[ 
        Validators.required, //campos requeridos
        Validators.email //formato email requerido
      ]),
      password: new FormControl(null,[ 
        Validators.required, //campos requeridos
        Validators.minLength(8) //minimo 8 carácteres

      ]),
    })
  }

  goToRegister(){
    this.router.navigate(['/register']); //Redirección a la ruta '/register' para el registro de usuarios
  }
  validar(){
    //Si el formulario es o no valido
    if(this.form.invalid){
      this.form.markAllAsTouched()
      return
    }

    this.router.navigate(['home'])

  }

}
