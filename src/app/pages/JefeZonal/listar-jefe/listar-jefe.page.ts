import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { cube, man, storefront, tv } from 'ionicons/icons';
import { DatePipe } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButton, IonList, IonItem, IonLabel, IonCard, IonTabs, IonTabBar, IonTabButton, IonFooter, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

export interface JefeZonal {
  id: number;
  nombrejz: string;
  apellido: string;
  correo: string;
  telefono: number;
  create_At: Date;
}

@Component({
  selector: 'app-listar-jefe',
  templateUrl: './listar-jefe.page.html',
  styleUrls: ['./listar-jefe.page.scss'],
  standalone: true,
  providers: [DatePipe],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonButton, IonList, IonItem, IonLabel, IonCard, IonTabs, IonTabBar, IonTabButton, IonFooter, IonGrid, IonRow, IonCol, CommonModule, FormsModule]
})
export class ListarJefePage implements OnInit {

  jefesZonales: JefeZonal[] = [
    {
      id: 1,
      nombrejz: 'Carlos',
      apellido: 'Gómez',
      correo: 'carlos.gomez@empresa.com',
      telefono: 123456789,
      create_At: new Date('2023-01-15')
    },
    {
      id: 2,
      nombrejz: 'María',
      apellido: 'Pérez',
      correo: 'maria.perez@empresa.com',
      telefono: 987654321,
      create_At: new Date('2022-07-22')
    },
    {
      id: 3,
      nombrejz: 'José',
      apellido: 'López',
      correo: 'jose.lopez@empresa.com',
      telefono: 456789123,
      create_At: new Date('2024-02-10')
    },
    {
      id: 4,
      nombrejz: 'Ana',
      apellido: 'Rodríguez',
      correo: 'ana.rodriguez@empresa.com',
      telefono: 789123456,
      create_At: new Date('2023-11-05')
    },
    {
      id: 5,
      nombrejz: 'Pedro',
      apellido: 'Martínez',
      correo: 'pedro.martinez@empresa.com',
      telefono: 321654987,
      create_At: new Date('2021-08-30')
    }
  ];

  constructor(public datePipe: DatePipe, private router: Router) {
    addIcons({ man, storefront, cube, tv });
  }

  ngOnInit() {
  }

  // Función para cambiar pagina
  AgregarJefe() {
    this.router.navigate(['/agregar-jefe']);
  }

  // Navegación Tab
  AlDashboard() {
    this.router.navigate(['/home']);
  }

  ListaDespacho() {
    this.router.navigate(['/lista-despachos']);
  }

  ListaTienda() {
    this.router.navigate(['/listar-tiendas']);
  }

  // Función eliminación
  eliminar(index: number) {
    this.jefesZonales.splice(index, 1);
  }
}
