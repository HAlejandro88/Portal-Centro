import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'servicio-clientes',
    loadChildren: () => import('./pages/servicio-clientes/servicio-clientes.module').then( m => m.ServicioClientesPageModule)
  },
  {
    path: 'opciones-consultar',
    loadChildren: () => import('./pages/opciones-consultar/opciones-consultar.module').then( m => m.OpcionesConsultarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
