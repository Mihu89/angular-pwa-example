import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsapiService {

  api_key ='ec6db74564124a67a7b0cb662ae3a7c5';

  constructor(private http: HttpClient) { }

  getArticlesTechnology() : Observable<any>{
    return this.http.get('http://newsapi.org/v2/top-headlines?category=technology&language=en&country=us&apiKey=' + this.api_key)
    .pipe(map((data: any) => data.articles));
  }

  getArticlesJavaScript() : Observable<any>{
    return this.http.get('http://newsapi.org/v2/everything?q=javascript&language=en&country=us&apiKey=' + this.api_key)
    .pipe(map((data: any) => data.articles));
  }

  getArticlesAngular(): Observable<any>{
    return this.http.get('http://newsapi.org/v2/everything?q=angular&language=en&country=us&apiKey=' + this.api_key)
    .pipe(map((data: any) => data.articles));
  }

  getArticlesReact(): Observable<any>{
    return this.http.get('http://newsapi.org/v2/everything?q=react&language=en&country=us&apiKey=' + this.api_key)
    .pipe(map((data: any) => data.articles));
  }
}
