import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlesAngularComponent } from './components/articles-angular/articles-angular.component';
import { ArticlesJavascriptComponent } from './components/articles-javascript/articles-javascript.component';
import { ArticlesReactComponent } from './components/articles-react/articles-react.component';
import { ArticlesTehnologyComponent } from './components/articles-tehnology/articles-tehnology.component';


const routes: Routes = [
  {path: 'articles', component: ArticlesTehnologyComponent},
  {path: 'articles-js', component: ArticlesJavascriptComponent},
  {path: 'art-angular', component: ArticlesAngularComponent},
  {path: 'art-react', component: ArticlesReactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
