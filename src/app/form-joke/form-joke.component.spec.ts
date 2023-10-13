import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormJokeComponent } from './form-joke.component';

describe('FormJokeComponent', () => {
  let component: FormJokeComponent;
  let fixture: ComponentFixture<FormJokeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormJokeComponent]
    });
    fixture = TestBed.createComponent(FormJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
