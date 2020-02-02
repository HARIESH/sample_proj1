import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCard4Component } from './post-card4.component';

describe('PostCard4Component', () => {
  let component: PostCard4Component;
  let fixture: ComponentFixture<PostCard4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCard4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCard4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
