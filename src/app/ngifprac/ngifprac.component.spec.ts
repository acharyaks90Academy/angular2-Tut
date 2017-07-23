import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifpracComponent } from './ngifprac.component';

describe('NgifpracComponent', () => {
  let component: NgifpracComponent;
  let fixture: ComponentFixture<NgifpracComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgifpracComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifpracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
