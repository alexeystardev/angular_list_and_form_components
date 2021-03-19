import { ContactFormComponent } from './contact-form/contact-form.component';
import { Routes, RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { CountBlockComponent } from './count-block/count-block.component';


const arr: Routes = [

{path: '', redirectTo: '/home', pathMatch: 'full'},

{path: 'home', component: HeaderComponent},
{path: 'userlist', component: UserListComponent},
{path: 'registration', component: FormComponent},
{path: 'cards', component: UserCardComponent},
{path: 'contact', component: ContactFormComponent},
{path: 'plusminus', component: CountBlockComponent},

];



export const routing = RouterModule.forRoot(arr);