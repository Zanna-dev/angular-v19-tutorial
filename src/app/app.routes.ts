import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'', component:HomeComponent},
    {path:'user/:id/:name', component:UserComponent},
    {path:'**', component:PageNotFoundComponent},
];
