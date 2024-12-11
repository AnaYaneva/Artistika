import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,
    CommonModule,
    RouterLinkActive],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {


  constructor(private router: Router, private userService: UserService) {
  }

  goHome(): void {
    this.router.navigate(['']);
  }

  isAdmin(): boolean {
    return this.userService.getRole() === 'admin';
  }



  isLoggedIn(): boolean {
    // return this.authService.isLogged();
    return this.userService.isLoggedIn();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
