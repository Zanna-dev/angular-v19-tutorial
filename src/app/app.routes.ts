import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    {path:'login', component:LoginComponent},
    {path:'about', component:AboutComponent},
    {path:'contact', component:ContactComponent},
    {path:'', component:HomeComponent},
    {path:'profile', component:ProfileComponent,data:{name:'Anil Sidhu'}},
    {path:'user/:id/:name', component:UserComponent},
    {path:'**', component:PageNotFoundComponent},
    // {path:'admin', component:AdminComponent}
    {path:'admin',loadComponent:()=>import('./admin/admin.component').then(c=>c.AdminComponent)

    }
];
