import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  /** Назва проєкту: показуємо в шаблоні через інтерполяцію {{ projectName }} */
  readonly projectName = 'Архів: Мобільні телефони';

  /** Короткий підзаголовок (необов’язково, але красиво) */
  readonly tagline = 'Каталог моделей • Порівняння • Характеристики';

  /** Поточний рік для підписів/бейджів */
  readonly year = new Date().getFullYear();
}
