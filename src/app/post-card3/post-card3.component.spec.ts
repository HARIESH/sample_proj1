import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCard3Component } from './post-card3.component';

describe('PostCard3Component', () => {
  let component: PostCard3Component;
  let fixture: ComponentFixture<PostCard3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCard3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCard3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
