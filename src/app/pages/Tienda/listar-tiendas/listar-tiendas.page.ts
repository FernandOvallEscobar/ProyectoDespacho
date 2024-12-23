import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { storefront, man, cube, tv } from 'ionicons/icons';
import { DatePipe } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButton, IonList, IonItem, IonLabel, IonCard, IonTabs, IonTabBar, IonTabButton, IonFooter, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { TiendaService } from '../../../service/tienda.service';

import { StorageService } from '../../../service/storage.service';

export interface Tienda {
  id: number;
  name: string;
  address: string;
  email: string;
  create_at: Date;
}

@Component({
  selector: 'app-listar-tiendas',
  templateUrl: './listar-tiendas.page.html',
  styleUrls: ['./listar-tiendas.page.scss'],
  standalone: true,
  providers: [DatePipe],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButton, IonList, IonItem, IonLabel, IonCard, IonTabs, IonTabBar, IonTabButton, IonFooter, IonGrid, IonRow, IonCol, CommonModule, FormsModule]
})
export class ListarTiendasPage implements OnInit {
  tiendas: Tienda[] = [];

  constructor(
    public datePipe: DatePipe, 
    private router: Router, 
    private tiendaService: TiendaService, 
    private storageService: StorageService, 
    private cdr: ChangeDetectorRef) {
    addIcons({ storefront, man, cube, tv });
  }

  ngOnInit() {
    this.loadTiendas();
  }

  async loadTiendas() {
    try {
      // Obtener la lista de tiendas desde la API
      const tiendas = await this.tiendaService.getTiendas().toPromise();
      // Guardar la lista de tiendas en la base de datos de Ionic
      if (tiendas) {
        await this.storageService.setTiendas(tiendas);
      }
      // Obtener la lista de tiendas desde la base de datos de Ionic
      this.tiendas = await this.storageService.getTiendas();
      console.log('Tiendas cargadas:', this.tiendas); // Debugging line
      this.cdr.detectChanges(); // Trigger change detection
    } catch (error) {
      console.error('Error al cargar tiendas:', error);
    }
  }

  AgregarTienda() {
    this.router.navigate(['/agregar-tiendas']);
  }

  // Navegación Tab
  AlDashboard() {
    this.router.navigate(['/home']);
  }

  ListaDespacho() {
    this.router.navigate(['/lista-despachos']);
  }

  ListaJefe() {
    this.router.navigate(['/listar-jefe']);
  }

  // Función eliminar
  eliminar(index: number) {
    this.tiendas.splice(index, 1);
  }
}
