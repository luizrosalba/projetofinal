import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';

/**
 * Prefixes all requests not starting with `http[s]` with `environment.chuckNorrisServerUrl`.
 */
@Injectable({
  providedIn: 'root',
})
export class ApiPrefixInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!/^(http|https):/i.test(request.url)) {
      if (request.url === '/jokes/random?category=dev') {
        request = request.clone({ url: environment.chuckNorrisServerUrl + request.url });
      } else {
        request = request.clone({ url: environment.gitHubUrl + request.url });
      }
    }
    return next.handle(request);
  }
}
