import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalplayComponent } from './modalplay.component';

describe('ModalplayComponent', () => {
  let component: ModalplayComponent;
  let fixture: ComponentFixture<ModalplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
