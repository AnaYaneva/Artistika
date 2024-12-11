import { Injectable, OnDestroy } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, tap, catchError, map, Observable, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Constant } from './../constants';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = Constant.URL_BASE;
  userUrl = Constant.URL_BASE + '/users';
  user: User | null = null;

  private currentUserSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public currentUser: Observable<User | null> = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      const decodedToken = this.jwtHelper.decodeToken(token);
      this.currentUserSubject.next(decodedToken); // Set the user data from the JWT token
    }
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  register(username: string, email: string, password: string, role: 'admin' | 'user'): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/users`, { username, email, password, role });
  }

  login(username: string, password: string): Observable<User> {
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      map((users: User[]) => {
        const filteredUsers = users.filter((user) => user.username === username);

        if (filteredUsers.length === 0) {
          throw new Error('User not found');
        }

        const user = filteredUsers[0];

        if (user.password !== password) {
          throw new Error('Invalid credentials');
        }

        const token = this.generateMockToken(user);
        localStorage.setItem('jwt', token);
        this.currentUserSubject.next(user);

        return user;
      }),
      catchError((error) => {
        console.error('Login failed:', error.message);
        return throwError(() => new Error('Login failed. Please try again.'));
      })
    );
  }

  private generateMockToken(user: User): string {
    const header = {
      alg: 'HS256',
      typ: 'JWT'
    };
    const payload = {
      id: user.id,
      username: user.username,
      role: user.role,
      exp: Math.floor(Date.now() / 1000) + 60 * 60 // Expires in 1 hour
    };
    const base64Header = btoa(JSON.stringify(header));
    const base64Payload = btoa(JSON.stringify(payload));
    const signature = 'mock-signature'; // Simulate a signature

    return `${base64Header}.${base64Payload}.${signature}`;
  }

  logout(): void {
    localStorage.removeItem('jwt');
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('jwt');
    return !!token && !this.jwtHelper.isTokenExpired(token);
  }

  getRole(): string | null {
    return this.currentUserSubject.value?.role || null;
  }


  getProfile() {
    return this.http
      .get<User>('/users')
      .pipe(tap((user) => this.currentUserSubject.next(user)));
  }

  updateProfile(username: string, email: string, tel?: string) {
    return this.http
      .put<User>(`/users`, {
        username,
        email,
        tel,
      })
      .pipe(tap((user) => this.currentUserSubject.next(user)));
  }

  // getRole(): string | null {
  //   return this.currentUserSubject.value?.role || null;
  // }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.userUrl}`);
  }
}
