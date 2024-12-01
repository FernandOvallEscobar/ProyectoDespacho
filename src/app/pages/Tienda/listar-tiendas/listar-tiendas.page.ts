import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {addIcons} from 'ionicons';
import {storefront, man, cube, tv} from 'ionicons/icons';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButton, IonList, IonItem, IonLabel, IonCard, IonTabs, IonTabBar, IonTabButton, IonFooter } from '@ionic/angular/standalone';
import { DatePipe } from '@angular/common';
import{Router} from '@angular/router';
import { TiendaService } from '../../../service/tienda.service';


export interface Tienda {
  id:number,
  name:String,
  address: String, 
  email:String,
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

  tiendas: any[] = [];

  constructor(public datePipe: DatePipe, private router:Router, private tiendaService: TiendaService) {
    addIcons({storefront, man, cube, tv}); }

  

  ngOnInit() {
    this.tiendaService.getTiendas().subscribe(
      (data) => {
        this.tiendas = data[0];
        console.log('Tiendas en variable:', this.tiendas);
      },
      (error) => {
        console.error('Error al cargar tiendas:', error);
      }
    );
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
