import { Component } from '@angular/core';
import { AuthorizationComponent } from './authorization/authorization.component';
import { TabViewModule } from 'primeng/tabview';
import { RegistrationComponent } from './registration/registration.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, AuthorizationComponent, RegistrationComponent, 
            TabViewModule, ToastModule],
  providers: [MessageService],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
