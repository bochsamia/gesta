import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {UserService} from '../services/user.service'

@Injectable()
export class Interceptor2 implements HttpInterceptor {

  constructor(private auth: AuthService , private userService : UserService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const re = '/membres/signin';
    const re2 = '/membres/signup';
    const re4 = '/membres/getUser';
    const re5 = '/authenticate'
    const re6 = '/products'
    const re7 = '/links'
    const re8 = '/persons'
    const re9 = '/productsdone'
    const re10 = '/membres/create'
    const re11 = '/membres/memb'

    

    if (request.url.search(re) === -1 && request.url.search(re2) === -1
     && request.url.search(re4) === -1 && request.url.search(re5) === -1
     && request.url.search(re6) === -1 && request.url.search(re7) === -1
     && request.url.search(re8) === -1 && request.url.search(re9) === -1
     && request.url.search(re10) === -1 && request.url.search(re11) === -1
     ) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userService.getAuthorizationTokenAdmin()}`
        
      }
    });
  }
    return next.handle(request);
  }
}
