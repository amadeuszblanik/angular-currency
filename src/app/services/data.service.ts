import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  private REST_API_SERVER = 'http://localhost:3030/api/live?pairs=';

  constructor(private httpClient: HttpClient) { }

  public getRequest(from: string, to: string) {
    const apiUrl = this.REST_API_SERVER + from + to;

    return this.httpClient.get(apiUrl);
  }
}
