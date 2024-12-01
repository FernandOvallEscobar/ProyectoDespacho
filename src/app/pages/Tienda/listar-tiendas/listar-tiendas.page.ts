import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {addIcons} from 'ionicons';
import {storefront, man, cube, tv} from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButton, IonList, IonItem, IonLabel, IonCard, IonTabs, IonTabBar, IonTabButton, IonFooter } from '@ionic/angular/standalone';
import { DatePipe } from '@angular/common';
import{Router} from '@angular/router'

export interface Tienda {
  id:number,
  nombretienda:String,
  direccion: String, 
  correocont:String,
  create_at:Date
}

@Component({
  selector: 'app-listar-tiendas',
  templateUrl: './listar-tiendas.page.html',
  styleUrls: ['./listar-tiendas.page.scss'],
  standalone: true,
  providers: [DatePipe],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButton, IonList, IonItem, IonLabel, IonCard, IonTabs, IonTabBar, IonTabButton, IonFooter, CommonModule, FormsModule]
})

export class ListarTiendasPage implements OnInit {

  tiendas: Tienda[] = [
    {
      id: 1,
      nombretienda: 'Pinturas Kolor Centro',
      direccion: 'Av. Central 123, Ciudad Capital',
      correocont: 'contacto@kolorcentro.com',
      create_at: new Date('2024-01-15T08:30:00')
    },
    {
      id: 2,
      nombretienda: 'Pinturas Kolor Sur',
      direccion: 'Av. Sur 456, Ciudad Capital',
      correocont: 'contacto@kolorsur.com',
      create_at: new Date('2024-03-10T09:00:00')
    },
    {
      id: 3,
      nombretienda: 'Pinturas Kolor Norte',
      direccion: 'Av. Norte 789, Ciudad Capital',
      correocont: 'contacto@kolornorte.com',
      create_at: new Date('2024-05-05T10:15:00')
    },
    {
      id: 4,
      nombretienda: 'Pinturas Kolor Este',
      direccion: 'Av. Este 321, Ciudad Capital',
      correocont: 'contacto@koloreste.com',
      create_at: new Date('2024-07-20T11:00:00')
    },
    {
      id: 5,
      nombretienda: 'Pinturas Kolor Oeste',
      direccion: 'Av. Oeste 654, Ciudad Capital',
      correocont: 'contacto@koloroeste.com',
      create_at: new Date('2024-09-01T12:00:00')
    }
  ];

  constructor(public datePipe: DatePipe, private router:Router) {
    addIcons({storefront, man, cube, tv}); }

  

  ngOnInit() {
  }

  AgregarTienda(){
    this.router.navigate(['/agregar-tiendas'])
  }

// Navegación Tab
AlDashboard(){
  this.router.navigate(['/home'])
}
ListaDespacho(){
  this.router.navigate(['/lista-despachos'])
}
ListaJefe(){
  this.router.navigate(['/listar-jefe'])
}

  //Función eliminar
  eliminar(index:number){
    this.tiendas.splice(index, 1)
  }

}
