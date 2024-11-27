import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-eliminar-jefe',
  templateUrl: './eliminar-jefe.page.html',
  styleUrls: ['./eliminar-jefe.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EliminarJefePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
