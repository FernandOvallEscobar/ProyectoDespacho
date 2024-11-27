import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { storefront } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonButton, IonCard  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregar-tiendas',
  templateUrl: './agregar-tiendas.page.html',
  styleUrls: ['./agregar-tiendas.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonButton, IonCard, CommonModule, FormsModule]
})
export class AgregarTiendasPage implements OnInit {

  nombre:String = '';
  direccion:String = '';
  correo:String = '';
  fecha: Date | null = null;
  
  guardar(){
    if (!this.nombre || !this.direccion || !this.correo || !this.fecha)
      { alert('Todos los campos son obligatorios.');
  } else {
    alert('Despacho guardado exitosamente.');
  }
  }


  constructor() {
    addIcons({ storefront });

   }

  ngOnInit() {
  }

}
