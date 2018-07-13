import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaciveComponent } from './reacive.component';

describe('ReaciveComponent', () => {
  let component: ReaciveComponent;
  let fixture: ComponentFixture<ReaciveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaciveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaciveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
