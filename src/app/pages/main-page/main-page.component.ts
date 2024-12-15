import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import {image1, image2, image3, fitil, dropdown, mentor1, mentor2, mentor3, star, mentor_btn, forest, city, ruslana, alia} from "../../constants/images"
import { NgOptimizedImage } from '@angular/common'
import { MentorComponent } from "../../components/mentor/mentor.component";
import { ArticleComponent } from "../../components/article/article.component";
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-main-page',
  imports: [HeaderComponent, MentorComponent, ArticleComponent, FooterComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  image1:string = image1;
  image2 = image2;
  image3 = image3;
  fitil = fitil;
  dropdown = dropdown;
  mentor1 = mentor1;
  mentor2 = mentor2;
  mentor3 = mentor3;
  star = star;
  mentor_btn = mentor_btn;
  forest = forest;
  city = city;
  ruslana = ruslana;
  alia = alia;
  

  

}
