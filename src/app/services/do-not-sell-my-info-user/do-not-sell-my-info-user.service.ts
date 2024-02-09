import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { DoNotSellMyInfoUser } from 'src/app/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class DoNotSellMyInfoUserService {
  private url = 'http://localhost:5200';
  private users$: Subject<DoNotSellMyInfoUser[]> = new Subject();

  constructor(private httpClient: HttpClient) { }

  private refreshUsers() {
    this.httpClient.get<DoNotSellMyInfoUser[]>(`${this.url}/do-not-sell-my-information`)
      .subscribe(users => {
        this.users$.next(users);
      });
  }

  getUsers(): Subject<DoNotSellMyInfoUser[]> {
    this.refreshUsers();
    return this.users$;
  }

  getUser(id: string): Observable<DoNotSellMyInfoUser> {
    return this.httpClient.get<DoNotSellMyInfoUser>(`${this.url}/do-not-sell-my-information/${id}`);
  }

  createUser(doNotSellMyInfoUser: DoNotSellMyInfoUser): Observable<string> {
    return this.httpClient.post(`${this.url}/do-not-sell-my-information`, doNotSellMyInfoUser, { responseType: 'text' });
  }

  updateUser(id: string, doNotSellMyInfoUser: DoNotSellMyInfoUser): Observable<string> {
    return this.httpClient.put(`${this.url}/do-not-sell-my-information/${id}`, doNotSellMyInfoUser, { responseType: 'text' });
  }

  deleteUser(id: string): Observable<string> {
    return this.httpClient.delete(`${this.url}/do-not-sell-my-information/${id}`, { responseType: 'text' });
  }
}
