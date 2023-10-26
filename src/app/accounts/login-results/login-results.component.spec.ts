import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginResultsComponent } from './login-results.component';

describe('LoginResultsComponent', () => {
  let component: LoginResultsComponent;
  let fixture: ComponentFixture<LoginResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginResultsComponent]
    });
    fixture = TestBed.createComponent(LoginResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
