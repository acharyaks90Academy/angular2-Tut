import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputeventComponent } from './inputevent.component';

describe('InputeventComponent', () => {
  let component: InputeventComponent;
  let fixture: ComponentFixture<InputeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
