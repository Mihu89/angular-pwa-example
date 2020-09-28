import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsapiService } from '../../services/newsapi.service';

@Component({
  selector: 'app-articles-tehnology',
  templateUrl: './articles-tehnology.component.html',
  styleUrls: ['./articles-tehnology.component.css'],
})
export class ArticlesTehnologyComponent implements OnInit {

  articles$: Observable<any>;

  constructor(private newsapi: NewsapiService) {}

  ngOnInit(): void {
    this.articles$ = this.newsapi.getArticlesTechnology();
  }
}
