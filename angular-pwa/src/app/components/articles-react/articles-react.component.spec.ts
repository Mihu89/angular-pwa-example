import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesReactComponent } from './articles-react.component';

describe('ArticlesReactComponent', () => {
  let component: ArticlesReactComponent;
  let fixture: ComponentFixture<ArticlesReactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesReactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesReactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
