import { CommonModule } from '@angular/common';
import { Component, Version } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Xinn Holding';
  images: string[] = ["/assets/Images/password_hide.png", "/assets/Images/password_reveal.png"];
  image :string = this.images[0];

  viewPW() {
    this.image = (this.image == this.images[0]) ? this.images[1] : this.images[0];
  }
}


