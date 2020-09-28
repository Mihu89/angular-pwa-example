import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAngularComponent } from './articles-angular.component';

describe('ArticlesAngularComponent', () => {
  let component: ArticlesAngularComponent;
  let fixture: ComponentFixture<ArticlesAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
