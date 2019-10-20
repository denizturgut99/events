import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CityJsonDataService {

  constructor(private http: HttpClient) {};

  getCities(): Observable<Object> {
    return this.http.get(environment.apiUrl + "cities");
  }

  getEvents(): Observable<Object> {
    return this.http.get(environment.apiUrl + "events");
  }
}
