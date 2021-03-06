import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormValComponent } from './form-val.component';

describe('FormValComponent', () => {
  let component: FormValComponent;
  let fixture: ComponentFixture<FormValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
