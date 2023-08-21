import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Membre } from '../membre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicemembersService {
  private apiUrl = 'http://localhost:8080';
  mm = 'members';
  dis = 'disconnect';
  constructor(private http: HttpClient) { }



  getMembers(): Observable<Membre[]> {
    return this.http.get<Membre[]>(`${this.apiUrl}/${this.mm}`);
  }
  disconnectMember(memberId): Observable<any> {
    const url = `${this.apiUrl}/${this.dis}/${memberId}`;
    return this.http.post(url, {});
  }

  setItem(key, value): void {
    const item = JSON.stringify(value);
    localStorage.setItem(key, item);
  }
}
