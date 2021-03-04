import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormComponent } from './form/form.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListRowComponent } from './user-list-row/user-list-row.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserListComponent,
    UserListRowComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
