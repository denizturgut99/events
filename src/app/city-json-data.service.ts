import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class CityJsonDataService {

  constructor(private http: HttpClient) {
    
  };

  getCities(): Observable<Object> {
    return this.http.get("http://localhost:3000/cities");
  }

  getEvents(): Observable<Object> {
    return this.http.get("http://localhost:3000/events");
  }
}
