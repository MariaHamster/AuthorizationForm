import { Injectable } from '@angular/core';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: IUser | null;

  constructor() { }

  getUser(): IUser | null{
    return this.user;
  };

  setUser(user: IUser) {
    this.user = user;
  };
}
