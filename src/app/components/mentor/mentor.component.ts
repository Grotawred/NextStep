import { Component, Input } from '@angular/core';
import { mentor_btn, star } from '../../constants/images';

@Component({
  selector: 'app-mentor',
  imports: [],
  templateUrl: './mentor.component.html',
  styleUrl: './mentor.component.css'
})
export class MentorComponent {

  constructor() {}

  @Input()
  name: string = "name";
  
  @Input()
  experience: string;

  @Input()
  education: string;

  @Input()
  image: string;

  @Input()
  rating: string;

  star = star;
  mentor_btn = mentor_btn;


}
