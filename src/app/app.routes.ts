import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { WeeklyFlashSalesComponent } from './weekly-flash-sales/weekly-flash-sales.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    {path: '', redirectTo: "/home", pathMatch: 'full', title: 'Home'},
    {path: 'login', component: LoginComponent, title: 'Login'},
    {path: 'home', component: HomeComponent, title: 'Home'},
    {path: 'product/:id', component: ProductDetailsComponent, title: 'Product Details'},
];
