import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetExampleComponent } from './set-example.component';

describe('SetExampleComponent', () => {
  let component: SetExampleComponent;
  let fixture: ComponentFixture<SetExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
