import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesTehnologyComponent } from './articles-tehnology.component';

describe('ArticlesTehnologyComponent', () => {
  let component: ArticlesTehnologyComponent;
  let fixture: ComponentFixture<ArticlesTehnologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesTehnologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesTehnologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
