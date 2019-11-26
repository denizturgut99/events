import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEventsBodyComponent } from './display-events-body.component';

describe('DisplayEventsBodyComponent', () => {
  let component: DisplayEventsBodyComponent;
  let fixture: ComponentFixture<DisplayEventsBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEventsBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEventsBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
