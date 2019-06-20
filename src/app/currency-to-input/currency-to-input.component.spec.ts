import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyToInputComponent } from './currency-to-input.component';

describe('CurrencyToInputComponent', () => {
  let component: CurrencyToInputComponent;
  let fixture: ComponentFixture<CurrencyToInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyToInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyToInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
