import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  // Дані за темою: мобільні телефони (бренд + модель)
  private readonly data: string[] = [
    'Apple iPhone 15 Pro',
    'Samsung Galaxy S24',
    'Google Pixel 9',
    'Xiaomi 14',
    'OnePlus 12',
    'Motorola Edge 50 Pro',
    'Nokia G42 5G'
  ];

  getData(): string[] {
    return [...this.data];
  }
}
