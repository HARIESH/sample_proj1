import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTravelogueImageComponent } from './about-travelogue-image.component';

describe('AboutTravelogueImageComponent', () => {
  let component: AboutTravelogueImageComponent;
  let fixture: ComponentFixture<AboutTravelogueImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTravelogueImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTravelogueImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
