import {Component, Input, OnInit} from '@angular/core';
import { Value } from '../value';
import {CURRENCIES} from '../currencies';

@Component({
  selector: 'app-currency-from-input',
  templateUrl: './currency-from-input.component.html',
  styleUrls: ['./currency-from-input.component.css']
})
export class CurrencyFromInputComponent implements OnInit {
  @Input() value: Value;

  currencies: string[];

  constructor() { }

  ngOnInit() {
    this.currencies = CURRENCIES;
  }

}
