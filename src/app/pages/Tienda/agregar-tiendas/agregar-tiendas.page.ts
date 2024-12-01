import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { storefront } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonButton, IonCard, IonImg  } from '@ionic/angular/standalone';
import { TakePhotoService } from 'src/app/service/take-photo.service';
import { TiendaService } from '../../../service/tienda.service';


@Component({
  selector: 'app-agregar-tiendas',
  templateUrl: './agregar-tiendas.page.html',
  styleUrls: ['./agregar-tiendas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonButton, IonCard, IonImg, CommonModule, FormsModule]
})
export class AgregarTiendasPage implements OnInit {

  //Variable que almacena datos formulario
  newTienda = {
    name: '',
    address: '',
    email: ''
  };

  photo: string | null = null;
  location: { latitude: number; longitude: number } | null = null;
  address: string | null = null;

  nombre:String = '';
  direccion:String = '';
  correo:String = '';
  
  guardar(){
    if (!this.nombre || !this.direccion || !this.correo)
      { alert('Todos los campos son obligatorios.');
  } else {
    alert('Tienda guardada exitosamente.');
  }
  }


  constructor(private takePhotoService: TakePhotoService, private tiendaService: TiendaService) {
    addIcons({ storefront });

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

  // Método para agregar tienda
  agregarTienda() {

    
    if (this.newTienda.name && this.newTienda.address && this.newTienda.email) {
      this.tiendaService.agregarTienda(this.newTienda).subscribe(
        (data) => {
          console.log('Tienda agregada:', data);
          this.newTienda = { name: '', address: '', email: '' };  // Limpiar el formulario
        },
        (error) => {
          console.error('Error al agregar tienda:', error);
        }
      );
    }
  }

}
