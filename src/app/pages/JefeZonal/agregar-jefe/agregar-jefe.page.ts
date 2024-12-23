import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { addIcons } from 'ionicons';
import { man } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonImg, IonGrid, IonText, IonRow, IonCol } from '@ionic/angular/standalone';
import { TakePhotoService } from 'src/app/service/take-photo.service';
import { StorageService } from 'src/app/service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-jefe',
  templateUrl: './agregar-jefe.page.html',
  styleUrls: ['./agregar-jefe.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonImg, IonGrid, IonText, IonRow, IonCol, CommonModule, FormsModule, ReactiveFormsModule]
})
export class AgregarJefePage implements OnInit {

  photo: string | null = null;
  location: { latitude: number; longitude: number } | null = null;
  address: string | null = null;
  successMessage: string | null = null;

  form!: FormGroup;

  constructor(private takePhotoService: TakePhotoService, private storage: StorageService, private router: Router) {
    addIcons({ man });
  }

  ngOnInit() {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      apellido: new FormControl(null, Validators.required),
      correo: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      telefono: new FormControl(null, [
        Validators.required,
        Validators.pattern("^[0-9]+$")
      ]),
      fecha: new FormControl(null, [
        Validators.required,
        (control: AbstractControl) => {
          const fecha = new Date(control.value);
          const hoy = new Date();
          hoy.setHours(0, 0, 0, 0);
          if (control.value && fecha < hoy) {
            return { fechaAnterior: true };
          }
          return null;
        }
      ])
    });
  }

  inputNombre() {
    this.form.get('nombre')?.markAsTouched();
  }

  inputApellido() {
    this.form.get('apellido')?.markAsTouched();
  }

  inputCorreo() {
    this.form.get('correo')?.markAsTouched();
  }

  inputTelefono() {
    this.form.get('telefono')?.markAsTouched();
  }

  inputFecha() {
    this.form.get('fecha')?.markAsTouched();
  }

  async guardar() {
    if (!this.form.valid) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    const jefe = {
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      correo: this.form.value.correo,
      telefono: this.form.value.telefono,
      fecha: this.form.value.fecha,
      photo: this.photo,
      location: this.location,
      address: this.address
    };
    await this.storage.set(this.form.value.correo, jefe);
    this.successMessage = 'Jefe guardado con éxito.';
    this.router.navigate(['/agregar-jefe']);
  }

  async capturePhoto() {
    const result = await this.takePhotoService.takePhoto();
    if (result) {
      this.photo = result.photo;
      this.location = result.location;
      this.address = result.address;
    }
  }
}
