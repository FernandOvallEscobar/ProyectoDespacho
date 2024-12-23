import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { addIcons } from 'ionicons';
import { storefront } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonIcon, IonImg, IonGrid, IonText, IonRow, IonCol, IonItem, IonLabel } from '@ionic/angular/standalone';
import { TakePhotoService } from 'src/app/service/take-photo.service';
import { TiendaService } from '../../../service/tienda.service';
import { StorageService } from 'src/app/service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-tiendas',
  templateUrl: './agregar-tiendas.page.html',
  styleUrls: ['./agregar-tiendas.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonInput,
    IonButton,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonIcon,
    IonImg,
    IonGrid,
    IonText,
    IonRow,
    IonCol,
    IonItem,
    IonLabel
  ]
})


export class  AgregarTiendasPage implements OnInit {

  photo: string | null = null;
  location: { latitude: number; longitude: number } | null = null;
  address: string | null = null;
  successMessage: string | null = null;

  form!: FormGroup;

  constructor(private takePhotoService: TakePhotoService, private storage: StorageService, private router: Router, private tiendaService: TiendaService) {
    addIcons({ storefront });
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ])
    });
  }

  inputName() {
    this.form.get('name')?.markAsTouched();
  }

  inputAddress() {
    this.form.get('address')?.markAsTouched();
  }

  inputEmail() {
    this.form.get('email')?.markAsTouched();
  }

  async guardar() {
    if (!this.form.valid) {
      alert('Todos los campos son obligatorios.');
      return;
    }
    const tienda = {
      name: this.form.value.name,
      address: this.form.value.address,
      email: this.form.value.email,
      photo: this.photo,
      location: this.location,
      addressLocation: this.address
    };
    await this.storage.set(this.form.value.email, tienda);
    this.successMessage = 'Tienda guardada con éxito.';
    this.router.navigate(['/agregar-tiendas']);
  }

  async capturePhoto() {
    const result = await this.takePhotoService.takePhoto();
    if (result) {
      this.photo = result.photo;
      this.location = result.location;
      this.address = result.address;
    }
  }

  agregarTienda() {
    if (this.form.valid) {
      this.tiendaService.agregarTienda(this.form.value).subscribe(
        (data) => {
          console.log('Tienda agregada:', data);
          this.form.reset();
        },
        (error) => {
          console.error('Error al agregar tienda:', error);
        }
      );
    }
  }
}
