import {Component, Input, OnInit} from '@angular/core';
import {Value} from '../value';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() value: Value;

  constructor() { }

  ngOnInit() {
  }

}
