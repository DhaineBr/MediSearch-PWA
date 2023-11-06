import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { orders } from './models/orders'
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(
    private http : HttpClient
  ) { }


  url = environment.apiProdURL

  public gettransactions(id: number): Observable<any>{
    return this.http.get(`${this.url}/customer-orders/${id}`).pipe(
      catchError((error) => {
        return throwError(error);
      }
      ));
  }

  public getmedicines(): Observable<any>{
    return this.http.get(`${this.url}/medicines`).pipe(
      catchError((error) => {
        return throwError(error);
      }
      ));
  }

  public getpharmacies(): Observable<any>{
    return this.http.get(`${this.url}/pharmacies`).pipe(
      catchError((error) => {
        return throwError(error);
      }
      ));
  }












}
