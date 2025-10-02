import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  projectName = 'Phones Archive';
  tagline = 'Каталог мобільних телефонів';
  year = new Date().getFullYear();
}
