import { routing } from './routing';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListRowComponent } from './user-list-row/user-list-row.component';
import { UserCardComponent } from './user-card/user-card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserListComponent,
    UserListRowComponent,
    UserCardComponent,
    NavbarComponent,
    ContactFormComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
	FormsModule,
	HttpClientModule,
	routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
