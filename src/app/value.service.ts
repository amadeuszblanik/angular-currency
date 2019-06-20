import { Value } from './value';
import { VALUE } from './mock-value';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValueService {

  constructor() { }
  getValue(): Observable<Value> {
    return of(VALUE);
  }
}
