import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { cube } from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonIcon  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-agregar-despachos',
  templateUrl: './agregar-despachos.page.html',
  styleUrls: ['./agregar-despachos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonInput, IonButton, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, CommonModule, FormsModule]
})
export class AgregarDespachosPage implements OnInit {

  nombre: string = '';
  fandeck: number | null = null;
  minifandeck: number | null = null;
  rolloSticker: number | null = null;
  cajaDeCintas: number | null = null;
  fecha: Date | null = null;


  //Validación ¿vienen todos los datos?
  guardar(){
    if(!this.nombre || !this.fandeck || !this.minifandeck || !this.rolloSticker || !this.cajaDeCintas || !this.fecha){
      alert('Todos los campos son obligatorios.');
    } else {
      alert('Despacho guardado exitosamente.');
    }
  }

  constructor() {
    addIcons({ cube });
   }

  ngOnInit() {
  }

}
