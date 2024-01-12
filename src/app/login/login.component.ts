import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  images: string[] = ["/assets/Images/password_hide.png", "/assets/Images/password_reveal.png"];
  image :string = this.images[0];

  viewPW() {
    this.image = (this.image == this.images[0]) ? this.images[1] : this.images[0];
  }
}
