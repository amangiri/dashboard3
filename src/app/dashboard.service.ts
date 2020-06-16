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

  handleError(errorObj: HttpErrorResponse) {
    console.log(errorObj);
    return throwError(errorObj.message)
  }
}
