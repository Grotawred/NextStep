import { Component } from '@angular/core';
import { logo, yout, inst } from '../../constants/images';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  logo = logo;
  youtube = yout;
  instagram = inst;

}
