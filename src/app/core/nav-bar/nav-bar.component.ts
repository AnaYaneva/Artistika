import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { UserService } from '../../user/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterLink,
    CommonModule,
  ],
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
    return this.userService.isLoggedIn();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }

  navigateToProfilePage() {
    let idFromJwt: number | null = this.userService.getCurrentUserIdFromJwt();
    if (idFromJwt) {
      this.router.navigate(['/profile', idFromJwt]);
    } else {
      this.router.navigate(['/']);
    }
  }
}
