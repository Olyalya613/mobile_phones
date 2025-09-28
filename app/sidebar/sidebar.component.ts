import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  brands = ['Apple', 'Samsung', 'Xiaomi', 'Google', 'OnePlus', 'Motorola', 'Nokia'];
  osList = ['iOS', 'Android'];
  priceRanges = ['до $300', '$300–$600', '$600–$900', '$900+'];
}
