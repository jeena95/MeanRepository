import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempConvComponent } from './temp-conv.component';

describe('TempConvComponent', () => {
  let component: TempConvComponent;
  let fixture: ComponentFixture<TempConvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempConvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempConvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
