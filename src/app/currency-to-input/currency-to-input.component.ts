import {Component, Input, OnInit} from '@angular/core';
import {Value} from '../value';
import {CURRENCIES} from '../currencies';

@Component({
  selector: 'app-currency-to-input',
  templateUrl: './currency-to-input.component.html',
  styleUrls: ['./currency-to-input.component.css']
})
export class CurrencyToInputComponent implements OnInit {
  @Input() value: Value;

  currencies: string[];

  constructor() { }

  ngOnInit() {
    this.currencies = CURRENCIES;
  }

}
