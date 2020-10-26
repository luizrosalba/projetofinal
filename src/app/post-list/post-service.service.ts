import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
export class PostService {
  constructor(private httpClient: HttpClient) {}

  ///CRUD

  getUsers() {
    return this.httpClient.get(routes.users()).pipe(catchError(() => of('Error, could not load users')));
  }

  postUsers(user: Object): Observable<{}> {
    let login = user['login'];
    let html_url = user['html_url'];
    let type = user['type'];
    let body = `login=${login}&html_url=${html_url}&type=${type}`;

    return this.httpClient
      .post(routes.users(), body, httpOptions)
      .pipe(catchError(() => of('Error, could not load users')));
  }
}

// let grant_type = 'password';
// let username = 'varejo_user';
// let password = 'w6h5xgtl';
// let body = `grant_type=${grant_type}&username=${username}&password=${password}`;

// return this.http.post(`${ApiDeSegurança}`, body, new RequestOptions({headers: header})).map(response=> response.json())
