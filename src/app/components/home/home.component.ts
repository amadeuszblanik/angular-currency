import {Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { Value } from '../../models/value';
import { ValueService } from '../../services/value.service';

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

  ngOnInit() {
    this.getValue();
    this.getApiData();
  }

  calc(): void {
    this.calculated = parseFloat((this.value.value * this.fxValue).toFixed(2));
  }

  getValue(): void {
    this.valueService.getValue().subscribe(value => this.value = value);
    this.calc();
    this.getApiData();
  }

  onDropdownChanged(): void {
    this.getApiData();
  }

  public getApiData(): void {
    const { from, to } = this.value;
    this.dataService.getRequest(from, to).subscribe((data: Data) => {
      this.fxValue = from !== to ? data.rates[from + to].rate : 1;
      this.calc();
    });
  }

}
