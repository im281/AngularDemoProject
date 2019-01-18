import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex2childComponent } from './ex2child.component';

describe('Ex2childComponent', () => {
  let component: Ex2childComponent;
  let fixture: ComponentFixture<Ex2childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex2childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex2childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
