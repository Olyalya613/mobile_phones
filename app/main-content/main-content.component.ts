import { Component } from '@angular/core';

type Phone = { model: string; brand: string; os: string; screen: string; battery: string; };

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent {
  phones = [
    { model: 'iPhone 15 Pro', brand: 'Apple', os: 'iOS', screen: '6.1″ OLED', battery: '3274 mAh' },
    { model: 'Galaxy S24', brand: 'Samsung', os: 'Android', screen: '6.2″ AMOLED', battery: '4000 mAh' },
    { model: 'Pixel 9', brand: 'Google', os: 'Android', screen: '6.3″ OLED', battery: '4700 mAh' },
    { model: 'Xiaomi 14', brand: 'Xiaomi', os: 'Android', screen: '6.36″ AMOLED', battery: '4610 mAh' },
    { model: 'OnePlus 12', brand: 'OnePlus', os: 'Android', screen: '6.82″ AMOLED', battery: '5400 mAh' }
  ];
}
