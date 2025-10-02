import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { PhoneSearchComponent } from './phone-search/phone-search.component';

import { AppLogicService } from './services/app-logic.service';
import { PublicApiService } from './services/public-api.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainContentComponent,
    UserProfileComponent,
    PhoneSearchComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: string[] = [];
  users: any[] = [];
  posts: any[] = [];
  todos: any[] = [];
  loading = false;

  constructor(
    private readonly logic: AppLogicService,
    private readonly api: PublicApiService
  ) {}

  ngOnInit(): void {
    if (this.logic) {
      this.items = this.logic.getDataAndLog();
    }
  }

  loadAll(): void {
    this.loading = true;
    this.api.getUsers().subscribe(u => this.users = u);
    this.api.getPosts().subscribe(p => this.posts = p);
    this.api.getTodos().subscribe(t => { this.todos = t; this.loading = false; });
  }
}
