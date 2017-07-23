import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylePrcComponent } from './style-prc.component';

describe('StylePrcComponent', () => {
  let component: StylePrcComponent;
  let fixture: ComponentFixture<StylePrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylePrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylePrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
