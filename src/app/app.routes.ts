import { Routes } from '@angular/router';
import { loginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';
export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./componentes/home/home.component').then( m => m.HomeComponent),
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
        canActivate: [loginGuard],
    },
    {
        path: 'veterinarios',
        loadComponent: () => import('./componentes/veterinarios/veterinarios.component').then( m => m.VeterinariosComponent),
        canActivate: [loginGuard],
    },
    {
        path: 'animales',
        loadComponent: () => import('./componentes/animales/animales.component').then(m => m.AnimalesComponent),
        canActivate: [loginGuard, AdminGuard],
    },    
];
