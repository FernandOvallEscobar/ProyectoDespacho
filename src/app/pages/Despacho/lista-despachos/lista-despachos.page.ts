import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { addIcons } from 'ionicons';
import { cube, man, storefront, tv } from 'ionicons/icons';
import { DatePipe } from '@angular/common';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonIcon, IonButton, IonCard, IonCardTitle, IonCardHeader, IonLabel, IonCardContent, IonTabs, IonTabBar, IonTabButton, IonFooter  } from '@ionic/angular/standalone';
import{Router} from '@angular/router'

export interface Despacho{
  id:number,
  nombre:String,
  fandeck:number, 
  mini_fandeck:number,
  rollo_Sticker:number,
  caja_De_Cintas:number,
  create_At:Date
}


@Component({
  selector: 'app-lista-despachos',
  templateUrl: './lista-despachos.page.html',
  styleUrls: ['./lista-despachos.page.scss'],
  standalone: true,
  providers: [DatePipe],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar,IonList, IonItem, IonIcon, IonLabel, IonButton, IonCard,IonCardHeader,IonCardTitle, IonCardContent, IonTabs, IonTabBar, IonTabButton, IonFooter, CommonModule, FormsModule]
})
export class ListaDespachosPage implements OnInit {

  despachos: Despacho[] = [
    {
      id: 1001,
      nombre: 'Despacho A',
      fandeck: 50,
      mini_fandeck: 30,
      rollo_Sticker: 20,
      caja_De_Cintas: 10,
      create_At: new Date('2024-01-01')
    },
    {
      id: 1002,
      nombre: 'Despacho B',
      fandeck: 60,
      mini_fandeck: 40,
      rollo_Sticker: 25,
      caja_De_Cintas: 12,
      create_At: new Date('2024-02-10')
    },
    {
      id: 1003,
      nombre: 'Despacho C',
      fandeck: 70,
      mini_fandeck: 45,
      rollo_Sticker: 30,
      caja_De_Cintas: 15,
      create_At: new Date('2024-03-15')
    },
    {
      id: 1004,
      nombre: 'Despacho D',
      fandeck: 80,
      mini_fandeck: 50,
      rollo_Sticker: 35,
      caja_De_Cintas: 18,
      create_At: new Date('2024-04-20')
    },
    {
      id: 1005,
      nombre: 'Despacho E',
      fandeck: 90,
      mini_fandeck: 55,
      rollo_Sticker: 40,
      caja_De_Cintas: 20,
      create_At: new Date('2024-05-25')
    }
  ];
  


  constructor(public datePipe: DatePipe, private router:Router) { 
    addIcons({ cube, storefront, tv, man });
  }


  ngOnInit() {
  }

  // Función cambiar pagina
  AgregarDespacho(){
    this.router.navigate(['/agregar-despachos'])
  }


  // Navegación Tab
  AlDashboard(){
    this.router.navigate(['/home'])
  }
  ListaTiendas(){
    this.router.navigate(['/listar-tiendas'])
  }
  ListaJefe(){
    this.router.navigate(['/listar-jefe'])
  }



  // Función eliminación
  eliminar(index:number){
    this.despachos.splice(index,1)
  }

  
  
}
