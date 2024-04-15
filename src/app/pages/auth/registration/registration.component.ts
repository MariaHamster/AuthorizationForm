import { Component } from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {IUser} from "../../../models/user";
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule, InputTextModule, CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
  login: string;
  loginText = 'Логин';
  psw: string;
  pswText = 'Пароль';
  name: string;
  nameText = 'Имя';
  successfulRegistration: boolean;
  alreadyRegistered: boolean;

  constructor(private messageService: MessageService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  registration(ev: Event): void | boolean  {
    const userObj: IUser = {
      psw: this.psw,
      login: this.login,
      name: this.name,
      registrationDate: new Date(),
    }

    if (!this.authService.isUserExists(userObj)){
      this.authService.setUser(userObj);
      window.localStorage.setItem('user ' + userObj.login, JSON.stringify(userObj));
      this.messageService.add({severity:'success', summary:'Регистрация прошла успешно'});
    } else {
      this.messageService.add({severity:'warn', summary:'Пользователь уже зарегистрирован'});
    }
  }

}
