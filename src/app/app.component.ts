import { Component } from '@angular/core';
import { NewsApiService } from "./news-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'news-app';
  articles :Array<any> =[];
  sources :Array<any> =[];

  /**
   *
   */
  constructor(private newsapi :NewsApiService) {
    
  }

  ngOnInit() {
    this.newsapi.initArticles()
    .subscribe( (data : any)  => {
      this.articles = data.articles
     debugger;
    }
    
    )
    this.newsapi.initSources()
    .subscribe((data : any)  => this.sources = data['sources'])
  }

  searchArticles(source : string){
    this.newsapi.getArticlesById(source)
    .subscribe((data : any)  => this.articles = data['articles'])
  };
}
