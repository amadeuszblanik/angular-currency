import {Component, Input, OnInit} from '@angular/core';
import {Value} from '../../models/value';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() value: Value;

  constructor() { }

  ngOnInit() {
  }

}
