import { Component } from '@angular/core';
import { CardComponent } from '../../../componentes/logged/card/card.component';
import { HeaderComponent } from '../../../componentes/logged/header/header.component';

@Component({
  selector: 'app-home',
  imports: [CardComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
