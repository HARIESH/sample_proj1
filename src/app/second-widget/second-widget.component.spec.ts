import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondWidgetComponent } from './second-widget.component';

describe('SecondWidgetComponent', () => {
  let component: SecondWidgetComponent;
  let fixture: ComponentFixture<SecondWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
