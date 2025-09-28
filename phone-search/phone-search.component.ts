import { Component } from '@angular/core';

type Phone = { id: number; brand: string; model: string; os: 'Android' | 'iOS' };

@Component({
  selector: 'app-phone-search',
  templateUrl: './phone-search.component.html',
  styleUrls: ['./phone-search.component.css']
})
export class PhoneSearchComponent {
  query = '';
  nextId = 1000;
  phones: Phone[] = [
    { id: 1, brand: 'Apple', model: 'iPhone 15 Pro', os: 'iOS' },
    { id: 2, brand: 'Samsung', model: 'Galaxy S24', os: 'Android' },
    { id: 3, brand: 'Google', model: 'Pixel 9', os: 'Android' },
    { id: 4, brand: 'Xiaomi', model: 'Xiaomi 14', os: 'Android' },
    { id: 5, brand: 'OnePlus', model: 'OnePlus 12', os: 'Android' },
  ];

  addPhone(): void {
    const samples: Omit<Phone, 'id'>[] = [
      { brand: 'Motorola', model: 'Edge 50 Pro', os: 'Android' },
      { brand: 'Nokia', model: 'G42 5G', os: 'Android' },
      { brand: 'Apple', model: 'iPhone 15', os: 'iOS' },
      { brand: 'Samsung', model: 'Galaxy A55', os: 'Android' },
      { brand: 'Google', model: 'Pixel 9 Pro', os: 'Android' },
    ];
    const pick = samples[Math.floor(Math.random() * samples.length)];
    this.phones.push({ id: this.nextId++, ...pick });
  }

  replaceArray(): void {
    this.phones = [...this.phones, { id: this.nextId++, brand: 'Nothing', model: 'Phone (2a)', os: 'Android' }];
  }
}
