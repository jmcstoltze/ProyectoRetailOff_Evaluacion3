import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login', // ruta a la página de login
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logged', // ruta a la página de usuario loggeado
    loadChildren: () => import('./pages/login/logged/logged.module').then( m => m.LoggedPageModule)
  },
  {
    path: 'history', // ruta al la página de historial de registros
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'map', // ruta al mapa
    loadChildren: () => import('./pages/map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'register', // ruta a la página de registro de usuario
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'scan', // ruta a la página de scanneo de código
    loadChildren: () => import('./pages/scan/scan.module').then( m => m.ScanPageModule)
  },
  {
    path: 'menu', // ruta al módulo de menú lateral
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'generica',
    loadChildren: () => import('./pages/generica/generica.module').then( m => m.GenericaPageModule)
  },
  {
    path: 'aws',
    loadChildren: () => import('./pages/aws/aws.module').then( m => m.AwsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
