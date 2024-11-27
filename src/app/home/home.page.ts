import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonList, IonItem, IonLabel, IonButton,  } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cube, man, storefront, tv } from 'ionicons/icons';
import{Router} from '@angular/router'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCardTitle, IonCardContent, IonIcon, IonGrid, IonRow, IonCol, IonCard, IonList, IonItem, IonLabel, IonButton, IonGrid, IonRow],
})
export class HomePage {
  constructor(private router:Router) {

    addIcons({tv, cube, storefront, man});
  }

  //Funciones cambiar pagina 
  // Hacia agregar:
  AgregarTienda(){
    this.router.navigate(['/agregar-tiendas'])
  }
  AgregarDespacho(){
    this.router.navigate(['/agregar-despachos'])
  }
  AgregarJefe(){
    this.router.navigate(['/agregar-jefe'])
  }

  //Hacia lista:
  ListaTienda(){
    this.router.navigate(['/listar-tiendas'])
  }
  ListaDespacho(){
    this.router.navigate(['/lista-despachos'])
  }
  ListaJefe(){
    this.router.navigate(['/listar-jefe'])
  }


  
}
