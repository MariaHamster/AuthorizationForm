import { Component } from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {IUser} from "../../../models/user";
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth/auth.service';
import { UserService } from '../../../services/user/user.service';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  standalone: true,
  imports: [FormsModule, InputTextModule, CommonModule],
  templateUrl: './authorization.component.html',
  styleUrl: './authorization.component.scss'
})
export class AuthorizationComponent {
  loginText = 'Логин';
  pswText = 'Пароль';
  psw: string;
  login: string;

  constructor(private authService: AuthService,
              private userService: UserService,
              private messageService: MessageService,
              private router: Router) { }

  onAuth(ev: Event): void {
    const authUser: IUser = {
      psw: this.psw,
      login: this.login,
    }

    if (this.authService.checkUser(authUser)) {
      this.userService.setUser(authUser);
      const user = window.localStorage.getItem('user ' + authUser?.login);
      if (user) {
        window.localStorage.setItem('authUser', user);
      }
      this.messageService.add({severity:'success', summary:'Авторизация прошла успешно'});
      this.router.navigate(['/home']);
    } else {
      this.messageService.add({severity:'error', summary:'Логин или пароль введены не верно'});
  }
}
}
