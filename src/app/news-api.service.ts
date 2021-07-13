import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsApiService {
  api_key = 'c2df2a0f78294a4da44f07ac0b1886f0';
  constructor(private http: HttpClient) {}
  initSources() {
    return this.http.get(
      'https://newsapi.org/v2/sources?language=en&apiKey=' + this.api_key
    );
  }

  initArticles() {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=' +
        this.api_key
    );
  }

  getArticlesById(source: string) {
    return this.http.get(
      'https://newsapi.org/v2/top-headlines?sources=' +
        source +
        '&apiKey=' +
        this.api_key
    );
  }
}
