import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./componentes/login/login.component').then( m => m.LoginComponent),
    },
    
    {
        path: 'login',
        loadComponent: () => import('./componentes/login/login.component').then( m => m.LoginComponent),
    },
    {
        path: 'home',
        loadComponent: () => import('./componentes/home/home.component').then( m => m.HomeComponent),
    },
    {
        path: 'altaveterinario',
        loadComponent: () => import('./componentes/altaveterinario/altaveterinario.component').then( m => m.AltaVeterinarioComponent),
    },
];
