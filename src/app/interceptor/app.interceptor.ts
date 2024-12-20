import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';
import { inject } from '@angular/core';
import { ErrorMsgService } from './../core/error-msg/error-msg.service';
import { Router } from '@angular/router';
import { Constant } from '../constants';

const API = '/api';

export const appInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(API)) {
    req = req.clone({
      url: req.url.replace(API, Constant.URL_BASE),
      withCredentials: true,
    });
  }

  const errorMsgService = inject(ErrorMsgService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err) => {
      if (err.status === 401) {
        router.navigate(['/login']);
      } else {
        errorMsgService.setError(err);
        router.navigate(['/error']);
      }

      return [err];
    })
  );
};
