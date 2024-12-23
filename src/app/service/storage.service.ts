import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) { 
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
    this._storage.setEncryptionKey('mySecretKey');
  }

  async set(key: string, value: any) {
    await this._storage?.set(key, value);
  }

  public async get(key: string) {  
    return await this._storage?.get(key);
  }

  //Registrar usuarios
  public async registerUser(email: string, password: string, firstName: string, lastName: string) {
    const user = { email, password, firstName, lastName };  
    await this.set(email, user);
  }

  //Autorización usuario existente
  public async loginUser(email: string, password: string): Promise<boolean> {
    const user = await this.get(email);
    if (user) {
      if (user.password === password) {
        return true;
      }
      else{
        return false
      }
    } 
    return false;
  }

  //Registro despacho 

  public async despachosIn(nombre: string, fandeck: number, minifandeck: number, rolloSticker: number, cajaDeCintas: number, fecha: Date) {
    try {
      const despachos = { nombre, fandeck, minifandeck, rolloSticker, cajaDeCintas, fecha };
      await this.set(nombre, despachos);
      console.log('Despacho guardado exitosamente.');
    } catch (error) {
      console.error('Error al guardar despacho:', error);
    }
  }


  //Registro tiendas
  async setTiendas(tiendas: any[]) {
    await this.set('tiendas', tiendas);
  }

  //Obtener tiendas
  async getTiendas() {
    const tiendas = await this.get('tiendas');
    return tiendas || [];
  }

  // Eliminar jefe zonal
  async remove(key: string) {
    await this._storage?.remove(key);
  }
}

