import { Component } from '@angular/core';
import { HeaderComponent } from '../../../componentes/not-logged/header/header.component';
import { SignInComponent } from '../../../componentes/not-logged/sign-in/sign-in.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, SignInComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
