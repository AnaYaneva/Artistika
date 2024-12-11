import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { provideHttpClient, withInterceptors } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [

    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(RouterModule),
    {
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS,
    },
    JwtHelperService
  ]
};
