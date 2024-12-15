import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  @Input()
  name: string = "name";
  
  @Input()
  arcticle: string;

  @Input()
  image: string;

  @Input()
  user: string;

}
