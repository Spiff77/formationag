import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCounterComponent } from './form-counter.component';

describe('FormCounterComponent', () => {
  let component: FormCounterComponent;
  let fixture: ComponentFixture<FormCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
