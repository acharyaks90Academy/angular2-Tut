import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtrrComponent } from './atrr.component';

describe('AtrrComponent', () => {
  let component: AtrrComponent;
  let fixture: ComponentFixture<AtrrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtrrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtrrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
