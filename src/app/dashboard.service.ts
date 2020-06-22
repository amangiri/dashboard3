import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  findBySegment(metric): Observable<any> {
    console.log(metric)
    let url = environment.url + 'segmentStateRegion';
    let searchParams= new HttpParams();
    searchParams = searchParams.append('selection',metric)
    console.log(url)
   return this.http.get<any>(url,{params:searchParams}).pipe(
      catchError(this.handleError)
    )
  }

  departmentCategory(metric): Observable<any> {
    console.log(metric)
    let url = environment.url + 'departmentCategory';
    let searchParams= new HttpParams();
    searchParams = searchParams.append('selection',metric)
    console.log(url)
   return this.http.get<any>(url,{params:searchParams}).pipe(
      catchError(this.handleError)
    )
  }

  findByCustomers(metric): Observable<any> {
    console.log(metric)
    let url = environment.url + 'suppliers';
    let searchParams= new HttpParams();
    searchParams = searchParams.append('selection',metric)
    console.log(url)
   return this.http.get<any>(url,{params:searchParams}).pipe(
      catchError(this.handleError)
    )
  }

  getMatric1(matric): Observable<any> {
    console.log(matric)
    let url = environment.url + 'matric1';
    let searchParams= new HttpParams();
    searchParams = searchParams.append('selection1',matric)
    console.log(url)
   return this.http.get<any>(url,{params:searchParams}).pipe(
      catchError(this.handleError)
    )
  }
  getMatric2(matric): Observable<any> {
    console.log(matric)
    let url = environment.url + 'matric2';
    let searchParams= new HttpParams();
    searchParams = searchParams.append('selection2',matric)
    console.log(url)
   return this.http.get<any>(url,{params:searchParams}).pipe(
      catchError(this.handleError)
    )
  }

  handleError(errorObj: HttpErrorResponse) {
    console.log(errorObj);
    return throwError(errorObj.message)
  }
}
