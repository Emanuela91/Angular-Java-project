import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseURL = "http://localhost:8080/api/v1/cars";
  constructor(private httpClient: HttpClient) { }

  getCarsList(): Observable<Car[]>{
    return this.httpClient.get<Car[]>(`${this.baseURL}`);
  }

  createCar(car: Car): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, car);
  }

  getCarById(id: number): Observable<Car>{
    return this.httpClient.get<Car>(`${this.baseURL}/${id}`);
  }

  updateCar(id: number, car: Car): Observable<any>{
    return this.httpClient.put(`${this.baseURL}/${id}`, car);
  }
}
