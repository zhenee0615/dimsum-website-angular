import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', redirectTo: "/home", pathMatch: 'full', title: 'Home'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'home', component: HomeComponent, title: 'Home'}
];
