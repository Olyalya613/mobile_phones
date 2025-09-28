import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { FilterByFieldPipe } from './pipes/filter-by-field.pipe';
import { FilterByFieldImpurePipe } from './pipes/filter-by-field-impure.pipe';
import { PhoneSearchComponent } from './phone-search/phone-search.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MainContentComponent,
    UserProfileComponent,
    FilterByFieldPipe,
    FilterByFieldImpurePipe,
    PhoneSearchComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
