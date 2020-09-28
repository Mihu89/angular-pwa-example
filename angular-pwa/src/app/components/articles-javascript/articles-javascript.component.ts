import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from 'src/app/services/newsapi.service';

@Component({
  selector: 'app-articles-javascript',
  templateUrl: './articles-javascript.component.html',
  styleUrls: ['./articles-javascript.component.css']
})
export class ArticlesJavascriptComponent implements OnInit {

  articlesJ$: Observable<any>;

  constructor(private newsapi: NewsapiService) {}

  ngOnInit(): void {
    this.articlesJ$ = this.newsapi.getArticlesJavaScript();
  }

}
