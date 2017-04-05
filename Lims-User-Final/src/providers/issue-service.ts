import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the IssueService provider.

  See http://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export interface data {
  dt: any;
}
@Injectable()
export class IssueService {

  constructor(public http: Http) {
    console.log('Hello IssueService Provider');
  }


  issue(mid, isbn, issueDate, dueDate, token): Observable<Response> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('https://glc-devtest-lims-api.azurewebsites.net/lims/issueBook/' + mid + '/' + isbn + '/' + issueDate + '/' + dueDate, options)
      .map((res: Response) => res);
  }

  request(mid, isbn, token) {
    console.log("Called", mid);
    let headers = new Headers({ 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('https://glc-devtest-lims-api.azurewebsites.net/lims/requestBook/' + mid + '/' + isbn, options)
      .map((res: Response) => res);
  }

  availabilty(isbn, token): Observable<data[]> {
    let headers = new Headers({ 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('https://glc-devtest-lims-api.azurewebsites.net/lims/availableBooks/' + isbn, options)
      .map((res: Response) => res.json());
  }

}
