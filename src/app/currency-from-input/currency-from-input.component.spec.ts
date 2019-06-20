import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyFromInputComponent } from './currency-from-input.component';

describe('CurrencyFromInputComponent', () => {
  let component: CurrencyFromInputComponent;
  let fixture: ComponentFixture<CurrencyFromInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyFromInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyFromInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
