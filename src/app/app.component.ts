import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}