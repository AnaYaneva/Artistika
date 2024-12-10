import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { PageNotFoundComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
// import { ProfileComponent } from './user/user-details/user-details.component';
// import { AddThemeComponent } from './theme/add-theme/add-theme.component';
// import { MainComponent } from './main/main.component';
// import { CurrentThemeComponent } from './theme/current-theme/current-theme.component';
// import { AuthGuard } from './guards/auth.guard';
// import { ErrorMsgComponent } from './core/error-msg/error-msg.component';
import { WorkshopAddComponent } from './workshops/workshop-add/workshop-add.component';
import { WorkshopAllComponent } from './workshops/workshop-all/workshop-all.component';
import { WorkshopDetailsComponent } from './workshops/workshop-details/workshop-details.component';
// import { MentorsTeamComponent } from './mentor/mentors-team/mentors-team.component';
import { MentorDeatailsComponent } from './mentor/mentor-details/mentor-details.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },

    //   Start - User routing
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: MentorDeatailsComponent },
    //   End - User routing

    { path: 'add', component: WorkshopAddComponent },
    { path: 'workshops', component: WorkshopAllComponent },
    { path: 'workshops-details/:id', component: WorkshopDetailsComponent },
    // { path: 'categories', component: WorkshopAllComponent },
    // { path: 'mentors', component: MentorsTeamComponent },
    // Start - Theme routing
    // {
    //     path: 'workshops',
    //     children: [
    //         { path: '', component: MainComponent },
    //         {
    //             // path: ':themeId',
    //             // component: CurrentThemeComponent,

    //             // canActivate: [AuthGuard],
    //         },
    //     ],
    // },
    // {
    //     path: 'workshop-add',
    //     loadComponent: () =>
    //         import('./workshops/workshop-add/workshop-add.component').then(
    //             (c) => c.WorkshopAddComponent
    //         ),
    //     canActivate: [AuthGuard],
    // },
    // End - Theme routing

    // { path: 'error', component: ErrorMsgComponent },
    // { path: '404', component: PageNotFoundComponent },
    // { path: '**', redirectTo: '/404' },
];
