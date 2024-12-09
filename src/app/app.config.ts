// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';
// import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { appInterceptor } from './app.interceptor';
// import { AngularFireModule } from '@angular/fire/compat';
// import { provideFirebaseApp, initializeApp, getApp } from '@angular/fire/app';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyCtOZl5dTKT5YHi4RrnAv2_NvBU3U4akEs",
//   authDomain: "artistika-87d97.firebaseapp.com",
//   projectId: "artistika-87d97",
//   storageBucket: "artistika-87d97.firebasestorage.app",
//   messagingSenderId: "349777691626",
//   appId: "1:349777691626:web:3a693faf02970b9a696893"
// };

// export const appConfig: ApplicationConfig = {
//   providers: [
//     provideHttpClient(withInterceptors([appInterceptor])),
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(routes),
//     provideFirebaseApp(() => initializeApp(firebaseConfig)),
//     provideFirestore(() => getFirestore()),
//   ],
// };

import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { appInterceptor } from './app.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    // provideHttpClient(withInterceptors([appInterceptor])),
    // provideZoneChangeDetection({ eventCoalescing: true }),
    // provideRouter(routes),
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
