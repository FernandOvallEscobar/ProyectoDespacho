import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { addIcons } from 'ionicons';
import { cube } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonImg, IonGrid, IonText, IonRow, IonCol} from '@ionic/angular/standalone';
import { TakePhotoService } from 'src/app/service/take-photo.service';
import { StorageService } from 'src/app/service/storage.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-agregar-despachos',
  templateUrl: './agregar-despachos.page.html',
  styleUrls: ['./agregar-despachos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonImg, IonGrid, IonText, IonRow, IonCol, CommonModule, FormsModule, ReactiveFormsModule]
})

export class AgregarDespachosPage implements OnInit {

  photo: string | null = null;
  location: { latitude: number; longitude: number } | null = null;
  address: string | null = null;
  successMessage: string | null = null;

  form!: FormGroup;

  constructor(private router: Router, private takePhotoService: TakePhotoService, private storage: StorageService) {
    addIcons({ cube });
  }

  ngOnInit() {

    // VALIDACIONES REACTIVAS
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      fandeck: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ]),
      minifandeck: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ]),
      rolloSticker: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ]),
      cajaDeCintas: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ]),
      fecha: new FormControl(null, [
        Validators.required,
        // Agrega una función de validación personalizada para verificar si la fecha es anterior a la fecha actual
        (control: AbstractControl) => {
          // Obtiene el valor de la fecha ingresada
          const fecha = new Date(control.value);// Convertir a objeto Date
          // Obtiene la fecha actual
          const hoy = new Date();
          // Verifica si la fecha ingresada es anterior a la fecha actual
          hoy.setHours(0, 0, 0, 0); // Establecer la hora a medianoche para la comparación
          if (control.value && fecha < hoy) {
            // Si la fecha es anterior, devuelve un objeto de error con la propiedad 'fechaAnterior' en true
            return { fechaAnterior: true };
          }
          // Si la fecha no es anterior, devuelve null para indicar que no hay errores
          return null;
        }
      ]),
    })
  }



 // Funciones para marcar como tocados los campos del formulario al interactuar con ellos (teclear)
inputNombre() {
  this.form.get('nombre')?.markAsTouched();
}  

inputFandeck() {
  this.form.get('fandeck')?.markAsTouched();
}

inputminifandeck() {
  this.form.get('minifandeck')?.markAsTouched();
};

inputRollo(){
  this.form.get('rolloSticker')?.markAsTouched();
};

inputCaja() {
  this.form.get('cajaDeCintas')?.markAsTouched();
};

inputFecha() {
  this.form.get('fecha')?.markAsTouched();
} 


// Método asíncrono para guardar los datos del formulario en la base de datos
  async guardar(){
    if (!this.form.valid) { // Verifica si el formulario es válido
      alert('Todos los campos son obligatorios.');
      return;
    } 
    const despacho = { // Crea un objeto con los datos del formulario
      nombre: this.form.value.nombre,
      fandeck: this.form.value.fandeck,
      minifandeck: this.form.value.minifandeck,
      rolloSticker: this.form.value.rolloSticker,
      cajaDeCintas: this.form.value.cajaDeCintas,
      fecha: this.form.value.fecha,
      photo: this.photo,
      location: this.location,
      address: this.address
    }
    await this.storage.despachosIn(this.form.value.nombre, this.form.value.fandeck, this.form.value.minifandeck, this.form.value.rolloSticker, this.form.value.cajaDeCintas, this.form.value.fecha); // Guarda los datos en la base de datos
    this.successMessage = 'Despacho guardado con éxito.';
    this.router.navigate(['/agregar-despachos']);
  }

  async capturePhoto() {

      const result = await this.takePhotoService.takePhoto()
      if(result){
        this.photo = result.photo;
        this.location = result.location;
        this.address = result.address;
      }

  }



}
