import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly LOCALSTORAGE_USER_KEY = "user";

  private httpClient = inject(HttpClient)
  private router = inject(Router)
  private _currentUser?: User;


  constructor() {
    const localStorageValue = localStorage.getItem(this.LOCALSTORAGE_USER_KEY);
    if (localStorageValue) {
      this._currentUser = JSON.parse(localStorageValue) satisfies User;
    }
  }


  get currentUser(): User | undefined {
    return this._currentUser;
  }

  isLoggedIn() {
    return !!localStorage.getItem(this.LOCALSTORAGE_USER_KEY);
  }

  login(username: string, password: string) {
    return this.httpClient.post<User>('https://dummyjson.com/auth/login', {
      username,
      password,
      expiresInMins: 43200 // Max set by the API
    }).pipe(
      tap({
        next: (response) => {
          this._currentUser = response;
          localStorage.setItem(this.LOCALSTORAGE_USER_KEY, JSON.stringify(this._currentUser));
          this.router.navigate(["/"])
        }
      })
    );
  }

  getAccessToken() {
    return this._currentUser ? `Bearer ${this._currentUser?.token}` : "";
  }

  logout() {
    delete this._currentUser;
    localStorage.removeItem(this.LOCALSTORAGE_USER_KEY);
    this.router.navigate(["/login"])
  }

}
