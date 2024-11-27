import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-editar-despacho',
  templateUrl: './editar-despacho.page.html',
  styleUrls: ['./editar-despacho.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class EditarDespachoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
