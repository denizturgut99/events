import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignedUpViewComponent } from './signed-up-view.component';

describe('SignedUpViewComponent', () => {
  let component: SignedUpViewComponent;
  let fixture: ComponentFixture<SignedUpViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignedUpViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignedUpViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
