import { Component } from '@angular/core';
import { HeaderComponent } from '../../../componentes/not-logged/header/header.component';
import { CardComponent } from '../../../componentes/logged/card/card.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
