import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { man } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonButton, IonCard } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregar-jefe',
  templateUrl: './agregar-jefe.page.html',
  styleUrls: ['./agregar-jefe.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonInput, IonButton, IonCard, CommonModule, FormsModule]
})
export class AgregarJefePage implements OnInit {

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
      alert('Despacho guardado exitosamente.');
    }
  }

  constructor() { 
    addIcons({ man });

  }

  ngOnInit() {
  }

}
