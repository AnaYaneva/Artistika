import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean {
    if (this.userService.getRole() === 'admin') {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
