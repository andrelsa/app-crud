import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {RequestCreate, RequestUpdate, ResponseCreate, ResponseUpdate, ResponseUser, ResponseUsers} from './user.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {
  }

  // List users
  getUsers(): Observable<ResponseUsers> {
    return this.http.get<ResponseUsers>(this.url);
  }

  // Create user
  createUser(request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }

  // Detail user
  getUser(id: string): Observable<ResponseUser> {
    const _url = `${this.url}/${id}`;
    return this.http.get<ResponseUser>(_url);
  }

  // Update user
  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
    const _url = `${this.url}/${id}`;
    return this.http.put<ResponseUpdate>(_url, request);
  }

  // Delete user
  deleteUser(id: string): Observable<any> {
    const _url = `${this.url}/${id}`;
    return this.http.delete<any>(_url);
  }

}
