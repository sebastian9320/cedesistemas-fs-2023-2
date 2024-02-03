import { Routes } from '@angular/router';
import { DefaultComponent } from './UI/layouts/default/default.component';
import { HomeComponent } from './UI/components/home/home.component';
import { ContactusComponent } from './UI/components/contactus/contactus.component';
import { FullscreenComponent } from './UI/layouts/fullscreen/fullscreen.component';
import { LoginComponent } from './UI/components/login/login.component';
import { SignupComponent } from './UI/components/signup/signup.component';
import { authGuardGuard } from './UI/shared/guards/auth-guard.guard';
import { EventdetailComponent } from './UI/components/eventdetail/eventdetail.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/fullscreen/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultComponent,
    canActivate: [authGuardGuard],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contact',
        component: ContactusComponent
      },
      {
        path: 'event-detail/:id',
        component: EventdetailComponent
      }
    ]
  },
  {
    path: 'fullscreen',
    component: FullscreenComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      }
    ]
  },
  //---- NOT MATCH URL ----
  {
    path: '**',
    component: HomeComponent
  }
];
