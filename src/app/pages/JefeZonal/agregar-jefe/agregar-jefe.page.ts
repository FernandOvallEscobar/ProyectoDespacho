import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { man } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonButton, IonCard, IonImg } from '@ionic/angular/standalone';
import { TakePhotoService } from 'src/app/service/take-photo.service';

@Component({
  selector: 'app-agregar-jefe',
  templateUrl: './agregar-jefe.page.html',
  styleUrls: ['./agregar-jefe.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonButton, IonCard, IonImg, CommonModule, FormsModule]
})
export class AgregarJefePage implements OnInit {

  photo: string | null = null;
  location: { latitude: number; longitude: number } | null = null;
  address: string | null = null

  nombre:String = '';
  apellido:String = '';
  correo:String = '';
  telefono:number | null = null;
  fecha: Date | null = null;

  // Validación
  guardar(){
    if(!this.nombre || !this.apellido || !this.correo || !this.telefono || !this.fecha){
      alert('Todos los campos son obligatorios.');
    } else {
      alert('Jefe guardado exitosamente.');
    }
  }

  constructor(private takePhotoService: TakePhotoService) { 
    addIcons({ man });

  }

  ngOnInit() {
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
