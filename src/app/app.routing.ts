import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { DiscListComponent } from './dicussion/list/list.component';

import { IconsComponent } from './icons/icons.component';
import { NotificationsComponent } from './notifications/notifications.component';

import { AuthGuard } from './_guards/index';
import { LoginLayoutComponent } from './layouts/login-layout.component';
import { HomeLayoutComponent } from './layouts/home-layout.component';


const routes: Routes = [
  { path: 'icons', component: IconsComponent },
  { path: 'notifications', component: NotificationsComponent },
  //{ path: '',               redirectTo: 'dashboard', pathMatch: 'full' },
  //{ path: '', component: DashboardComponent, canActivate: [AuthGuard] },
  {
    path: '',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: DiscListComponent
      }
    ]
  },
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      { path: 'dashboard', component: DiscListComponent },
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
