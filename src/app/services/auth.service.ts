import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User7 } from '../domain/User7';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL_BASE = environment.apiBaseUrl;
  URL_SIGNIN = '/membres/signin';
  URL_SIGNUP = '/membres/signup';

  constructor(private http: HttpClient) { }

  getAuthorizationToken() {
    return localStorage.getItem('access_token');
  }


  getAuthorizationTokenAdmin() {
    return localStorage.getItem('access_token_admin');
  }


  signin(email: string, password: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('initiales', email);
    params = params.append('motPasseMembre', password);

      return <Observable<any>>this.http.post(this.URL_BASE + this.URL_SIGNIN, {}, { params: params});
  }

  signup(user: User7): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');

      return <Observable<any>>this.http.post(this.URL_BASE + this.URL_SIGNUP, user);
  }




}
