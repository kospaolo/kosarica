import { Injectable } from '@angular/core';
import { User } from '../shared/models/User';
import { BehaviorSubject, Observable } from 'rxjs';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(
    this.getUserFromLocalStorage()
  );
  public userObservable: Observable<User>;
  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }

  login(userLogin: IUserLogin): Observable<User> {
    this.http
      .post<User>('http://localhost:3000/api/users/login', userLogin)
      .subscribe((user) => {
        this.setUserToLocalStorage(user);
        this.userSubject.next(user);
      });
    return this.userObservable;
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(new User());
    window.location.reload();
  }

  setUserToLocalStorage(user: User): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUserFromLocalStorage(): User {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : new User();
  }
}
