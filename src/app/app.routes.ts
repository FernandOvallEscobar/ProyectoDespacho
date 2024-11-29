import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'lista-despachos',
    loadComponent: () => import('./pages/Despacho/lista-despachos/lista-despachos.page').then( m => m.ListaDespachosPage)
  },
  {
    path: 'agregar-despachos',
    loadComponent: () => import('./pages/Despacho/agregar-despachos/agregar-despachos.page').then( m => m.AgregarDespachosPage)
  },
  {
    path: 'eliminar-despachos',
    loadComponent: () => import('./pages/Despacho/eliminar-despachos/eliminar-despachos.page').then( m => m.EliminarDespachosPage)
  },
  {
    path: 'editar-despacho',
    loadComponent: () => import('./pages/Despacho/editar-despacho/editar-despacho.page').then( m => m.EditarDespachoPage)
  },
  {
    path: 'agregar-tiendas',
    loadComponent: () => import('./pages/Tienda/agregar-tiendas/agregar-tiendas.page').then( m => m.AgregarTiendasPage)
  },
  {
    path: 'eliminar-tiendas',
    loadComponent: () => import('./pages/Tienda/eliminar-tiendas/eliminar-tiendas.page').then( m => m.EliminarTiendasPage)
  },
  {
    path: 'listar-tiendas',
    loadComponent: () => import('./pages/Tienda/listar-tiendas/listar-tiendas.page').then( m => m.ListarTiendasPage)
  },
  {
    path: 'editar-tienda',
    loadComponent: () => import('./pages/Tienda/editar-tienda/editar-tienda.page').then( m => m.EditarTiendaPage)
  },
  {
    path: 'agregar-jefe',
    loadComponent: () => import('./pages/JefeZonal/agregar-jefe/agregar-jefe.page').then( m => m.AgregarJefePage)
  },
  {
    path: 'listar-jefe',
    loadComponent: () => import('./pages/JefeZonal/listar-jefe/listar-jefe.page').then( m => m.ListarJefePage)
  },
  {
    path: 'editar-jefe',
    loadComponent: () => import('./pages/JefeZonal/editar-jefe/editar-jefe.page').then( m => m.EditarJefePage)
  },
  {
    path: 'eliminar-jefe',
    loadComponent: () => import('./pages/JefeZonal/eliminar-jefe/eliminar-jefe.page').then( m => m.EliminarJefePage)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'random',
    loadComponent: () => import('./pages/random/random.page').then( m => m.RandomPage)
  },
];
