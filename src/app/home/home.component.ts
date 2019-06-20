import {Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Value } from '../value';
import { ValueService } from '../value.service';

interface Data {
  rates: {
    [key: string]: {
      rate: number;
    }
  };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  value: Value;

  fxValue = 0;

  calculated = 0;

  constructor(private dataService: DataService, private  valueService: ValueService) { }

  calc(): void {
    this.calculated = parseFloat((this.value.value * this.fxValue).toFixed(2));
  }

  getValue(): void {
    this.valueService.getValue().subscribe(value => this.value = value);
    this.calc();
    this.getApiData();
  }

  public getApiData(): void {
    this.dataService.getRequest(this.value.from, this.value.to).subscribe((data: Data) => {
      this.fxValue = data.rates[this.value.from + this.value.to].rate;
    });
    this.calc();
  }

  ngOnInit() {
    this.getValue();
    this.getApiData();
  }

}
