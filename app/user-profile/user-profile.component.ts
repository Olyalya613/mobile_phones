// src/app/user-profile/user-profile.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User, UserStatus } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  user: User = {
    id: 101,
    name: 'Ірина Дьяченко',
    status: UserStatus.Active,
    address: { city: 'Київ', street: 'вул. Антоновича, 45' },
    hobbies: ['Фотографія', 'Трейлранінг', 'JavaScript', 'Мандрівки'],
  };

  users: User[] = [
    this.user,
    {
      id: 102,
      name: 'Олег Кравченко',
      status: UserStatus.Pending,
      address: { city: 'Львів', street: 'вул. Зелена, 12' },
      hobbies: ['Велоспорт', 'Node.js', 'Подорожі'],
    },
    {
      id: 103,
      name: 'Марія Сапфір',
      status: UserStatus.Inactive,
      address: { city: 'Харків', street: 'пр-т Науки, 7' },
      hobbies: ['Фортепіано', 'Англійська', 'Фотопрогулянки'],
    },
  ];

  getHobbiesCount(u: User): number {
    return u.hobbies.length;
  }

  statusClass(u: User): string {
    switch (u.status) {
      case UserStatus.Active: return 'status active';
      case UserStatus.Pending: return 'status pending';
      case UserStatus.Inactive: return 'status inactive';
    }
  }

  initials(src: string | User): string {
    const name = typeof src === 'string' ? src : (src?.name ?? '');
    return name
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map(part => part[0]!)
      .slice(0, 2)
      .join('')
      .toUpperCase();
  }
}
