import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const routes = {
  users: () => `/users`,
};

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',

    //Authorization: 'my-auth-token'
  }),
};

@Injectable({
  providedIn: 'root',
})
export class ExampleService {
  constructor(private httpClient: HttpClient) {}

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of('Error, could not load users')));
  }

  deleteUsers(id: number): Observable<{}> {
    return this.httpClient
      .delete(routes.users() + `/${id}`, httpOptions)
      .pipe(catchError(() => of('Error, could not load users')));
  }

  patchUsers(user: Object): Observable<{}> {
    let id = user['id'];
    let login = user['login'];
    let html_url = user['html_url'];
    let type = user['type'];
    let body = `login=${login}&html_url=${html_url}&type=${type}`;

    return this.httpClient
      .patch(routes.users() + `/${id}`, body, httpOptions)
      .pipe(catchError(() => of('Error, could not load users')));
  }
}
