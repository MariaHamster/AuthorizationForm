import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { IUser } from '../../models/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TableModule, CommonModule],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  user: IUser;
  authUserLogin: string;
  users: IUser[];

  constructor(private router: Router) { }

  ngOnInit() {
    const authUser = window.localStorage.getItem('authUser');
    if (authUser) {
      this.user = JSON.parse(authUser);
      this.authUserLogin = this.user.login;
    }
    this.initUsersTable();
  }

  initUsersTable() {
    this.users = [];
    Object.keys(localStorage).forEach(data => {
      let item = localStorage.getItem(data);
      if (data != 'authUser') {
        if (item) {
          this.users.push(JSON.parse(item));
        }
      }
    })
  }

  deleteUser(user: IUser): void {
    localStorage.removeItem('user ' + user.login);
    this.initUsersTable();
  }

  logout() {
    localStorage.removeItem('authUser');
    this.router.navigate(['/auth']);
  }
}
