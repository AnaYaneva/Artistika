import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';
import { FormsModule, NgForm } from '@angular/forms';
import { EmailDirective } from '../../directives/email.directive';
// import { DOMAINS } from '../../constants';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    RouterLink,
    CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  isLoading = false;
  loginError = false;

  constructor(private authService: UserService, private router: Router) { }

  onSubmit(): void {
    if (this.username && this.password) {
      this.isLoading = true;
      this.authService.login(this.username, this.password).subscribe({
        next: (response) => {
          this.isLoading = false; // Stop loading on success
          this.router.navigate(['/home']); // Redirect to home on successful login
        },
        error: (err) => {
          this.isLoading = false; // Stop loading on error
          this.loginError = true; // Show error message
          console.error('Login failed', err);
        },
      });
    }
  }
}