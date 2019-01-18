import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1childComponent } from './ex1child.component';

describe('Ex1childComponent', () => {
  let component: Ex1childComponent;
  let fixture: ComponentFixture<Ex1childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex1childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex1childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
