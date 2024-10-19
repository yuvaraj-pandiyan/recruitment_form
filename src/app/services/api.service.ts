import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public BASE_URL = environment.BASE_URL;
  constructor(public http : HttpClient) { }

  public saveForm(payload: object): Observable<any> {
    return this.http.post(`${this.BASE_URL}/form/save`,payload )
  }
  public deleteJobForm(id: string): Observable<any> {
    return this.http.delete(`${this.BASE_URL}/form/details/${id}`)
  }
  public updateJobForm(id: string, payload:object): Observable<any> {
    return this.http.put(`${this.BASE_URL}/form/details/${id}`, payload)
  }
  public getJobForm(id: string, payload:object): Observable<any> {
    return this.http.put(`${this.BASE_URL}/form/details/${id}`, payload)
  }
}