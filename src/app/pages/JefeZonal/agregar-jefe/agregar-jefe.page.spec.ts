import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgregarJefePage } from './agregar-jefe.page';
import { TakePhotoService } from 'src/app/service/take-photo.service'; // Servicio de fotos
import { FormsModule } from '@angular/forms'; // Para formularios
import { IonContent, IonHeader, IonCard, IonInput, IonButton } from '@ionic/angular/standalone'; // Componentes de Ionic



//Simulación de servicio TakePhotoService 
const mockTakePhotoService = {
  takePhoto: jasmine.createSpy('takePhoto').and.returnValue(Promise.resolve({
    photo: 'mock-photo-data',
    location: { latitude: 12.34, longitude: 56.78 },
    address: 'Mock Address'
  }))
};

//Configuración de entorno de pruebas que simula comportamiento de componente
describe('AgregarJefePage', () => {
  let component: AgregarJefePage; // La instancia del componente


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, IonContent, IonHeader, IonCard, IonInput, IonButton, AgregarJefePage],
      providers: [
        { provide: TakePhotoService, useValue: mockTakePhotoService } // Usamos el mock
      ]
    }).compileComponents();

    const fixture = TestBed.createComponent(AgregarJefePage);
    component = fixture.componentInstance; // Creamos el componente
  });



  fit('debería crear el componente', () => {
    expect(component).toBeTruthy(); // Verifica que el componente se creó
  });

  fit('debería capturar una foto y obtener ubicación', async () => {
    await component.capturePhoto(); // Llama al método
    expect(component.photo).toBe('mock-photo-data'); // Verifica que se guarde la foto
    expect(component.location).toEqual({ latitude: 12.34, longitude: 56.78 }); // Verifica la ubicación
    expect(component.address).toBe('Mock Address'); // Verifica la dirección
  });

  fit('debería mostrar un error si faltan campos al guardar', () => {
    spyOn(window, 'alert'); // Simula la alerta
    component.guardar(); // Llama al método guardar()
    expect(window.alert).toHaveBeenCalledWith('Todos los campos son obligatorios.'); // Verifica el mensaje
  });



  fit('debería mostrar éxito al guardar con todos los campos', () => {
    spyOn(window, 'alert'); // Simula la alerta
    component.nombre = 'Prueba';
    component.apellido = "Pruebon";
    component.correo = 'prueba@ejemplo.com';
    component.telefono = 15344435;
    component.fecha = new Date();
    component.guardar();
    expect(window.alert).toHaveBeenCalledWith('Jefe guardado exitosamente.');
  });
});


