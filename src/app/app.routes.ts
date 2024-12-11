import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { WorkshopAddComponent } from './workshops/workshop-add/workshop-add.component';
import { WorkshopAllComponent } from './workshops/workshop-all/workshop-all.component';
import { WorkshopDetailsComponent } from './workshops/workshop-details/workshop-details.component';
import { AboutComponent } from './about/about.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { PageNotFoundComponent } from './error/error.component';
import { AdminGuard } from './guards/admin.guard';
import { ProfileComponent } from './user/user-details/user-details.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },

    //   Start - User routing
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile/:id', component: ProfileComponent },
    //   End - User routing

    { path: 'add', component: WorkshopAddComponent, canActivate: [AdminGuard] },
    { path: 'workshops', component: WorkshopAllComponent },
    { path: 'workshop-details/:id', component: WorkshopDetailsComponent },

    { path: 'error', component: ErrorMsgComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/404' },
];
