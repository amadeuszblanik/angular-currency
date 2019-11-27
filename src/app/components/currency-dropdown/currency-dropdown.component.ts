import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Value } from '../../models/value';
import {CURRENCIES} from '../../models/currencies';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.css']
})
export class CurrencyDropdownComponent implements OnInit {
  @Input() value: Value;
  @Input() valueKind: 'from' | 'to';
  @Output() valueEventEmitter: EventEmitter<Value> = new EventEmitter();

  currencies: string[];

  constructor() { }

  changed() {
    this.valueEventEmitter.emit(this.value);
  }

  ngOnInit() {
    this.currencies = CURRENCIES;
  }

}
