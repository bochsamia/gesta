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
export class Interceptor implements HttpInterceptor {

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
    const re10 = '/typedocument/create'
    const re11 = '/typedocument'
    const re12 = '/typedocument/up'
    const re13 = '/infraction/create'
    const re14 = '/infraction'
    const re15 = '/infraction/up'
    const re16 = '/parametres/create'
    const re17 = '/parametres/all'
    const re18 = '/membres/create'
    const re19 = '/membres/memb'
    const re20 = '/membres/all'
    const re21 = '/membres/up'
    const re22 = '/dvm/create'
    const re23 = '/dvm/dvm'
    const re24 = '/dvm/all'










    

    if (request.url.search(re) === -1 && request.url.search(re2) === -1
     && request.url.search(re4) === -1 && request.url.search(re5) === -1
     && request.url.search(re6) === -1 && request.url.search(re7) === -1
     && request.url.search(re8) === -1 && request.url.search(re9) === -1
     && request.url.search(re10) === -1  && request.url.search(re11) === -1
     && request.url.search(re12) === -1 && request.url.search(re13) === -1
     && request.url.search(re14) === -1 && request.url.search(re15) === -1
     && request.url.search(re16) === -1  && request.url.search(re17) === -1
     && request.url.search(re18) === -1 && request.url.search(re19) === -1
     && request.url.search(re20) === -1 && request.url.search(re21) === -1
     && request.url.search(re22) === -1   && request.url.search(re23) === -1
     && request.url.search(re24) === -1
     

     ) {
    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.userService.getAuthorizationToken()}`
        
      }
    });
  }
    return next.handle(request);
  }
}
