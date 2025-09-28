import { Component } from '@angular/core';
import { User, UserStatus } from '../models/user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent {
  // Кілька варіантів користувачів з різними даними
  users: User[] = [
    {
      id: 101,
      name: 'Ірина Дьяченко',
      status: UserStatus.Active,
      address: { city: 'Київ', street: 'вул. Антоновича, 45' },
      hobbies: ['Фотографія', 'Трейлранінг', 'JavaScript', 'Мандрівки'],
    },
    {
      id: 102,
      name: 'Олексій Коваль',
      status: UserStatus.Pending,
      address: { city: 'Львів', street: 'пл. Ринок, 3' },
      hobbies: ['UX-дизайн', 'Кавоваріння', 'Піші походи'],
    },
    {
      id: 103,
      name: 'Марія Сидоренко',
      status: UserStatus.Inactive,
      address: { city: 'Одеса', street: 'вул. Дерибасівська, 10' },
      hobbies: ['Йога', 'Акварель', 'Self-hosted сервіси', 'Плавання'],
    },
    {
      id: 104,
      name: 'Dmytro Hladkyi',
      status: UserStatus.Active,
      address: { city: 'Харків', street: 'просп. Науки, 12' },
      hobbies: ['GoLang', 'Велоспорт', 'Історичні подкасти'],
    },
  ];

  // 5) Метод повертає кількість хобі для конкретного користувача
  getHobbiesCount(u: User): number {
    return u.hobbies.length;
  }

  // Допоміжне: ініціали для "аватарки"
  initials(name: string): string {
    return name
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map(part => part[0]?.toUpperCase() ?? '')
      .join('');
  }

  // Класи для бейджа статусу
  statusClass(u: User): string {
    switch (u.status) {
      case UserStatus.Active: return 'status active';
      case UserStatus.Pending: return 'status pending';
      case UserStatus.Inactive: return 'status inactive';
    }
  }
}
