import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../types/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  async signUp(dto: IAuthSignUp) {
    console.log(dto);
  }

  async signIn(dto: IAuthSignIn) {}

  logout() {}

  async getMe() {}
}

export interface IAuthService {}

export interface IAuthSignUp extends Pick<IUser, 'email' | 'name'> {
  password: string;
}

export interface IAuthSignIn extends Pick<IUser, 'email'> {
  password: string;
}
