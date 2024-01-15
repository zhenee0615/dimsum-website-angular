import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})

export class FooterComponent {
  iconSrc = [
    "assets/Images/fb_icon.png", 
    "assets/Images/insta_icon.png", 
    "assets/Images/whatsapp_icon.png", 
    "assets/Images/youtube_icon.png"
  ];
}
