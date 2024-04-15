import { Injectable } from '@angular/core';
import { IUser } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usersStorage: IUser[] = [];

  constructor() { }

  checkUser(user: IUser): boolean {
    let isUserSavedInStore = window.localStorage.getItem('user ' + user?.login);
    let userInStore: IUser = <IUser>{};

    if (isUserSavedInStore) {
      userInStore = JSON.parse(isUserSavedInStore);
    }

    if (userInStore?.login) {
      return userInStore.psw === user.psw;
    }
    return false;
  }

  setUser(user: IUser): void {
    const isUserExists = window.localStorage.getItem('user ' + user?.login);
    if (!isUserExists) {
      this.usersStorage.push(user);
    }
  }

  isUserExists(user: IUser): boolean {
    const isUserExists = window.localStorage.getItem('user ' + user?.login);
    return !!isUserExists;
  }

}
