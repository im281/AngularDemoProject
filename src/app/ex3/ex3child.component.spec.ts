import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3childComponent } from './ex3child.component';

describe('Ex3childComponent', () => {
  let component: Ex3childComponent;
  let fixture: ComponentFixture<Ex3childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ex3childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ex3childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
