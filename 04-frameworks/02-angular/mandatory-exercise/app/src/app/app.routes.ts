import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CrudComponent } from './crud/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
  { path: 'home', component:  HomeComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'about', component:  AboutComponent},
  { path: 'crud', component:  CrudComponent},
  { path: 'dashboard', component:  DashboardComponent},
  { path: 'gallery', component:  GalleryComponent},
  { path: 'profile', component:  ProfileComponent}
];
