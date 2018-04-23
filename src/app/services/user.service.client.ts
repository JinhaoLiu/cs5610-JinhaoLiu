import { User } from '../models/user.model.client';
import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {environment} from '../../environments/environment';

@Injectable()
export class UserService {
  constructor(private http: Http) {}

  baseUrl = environment.baseUrl;

  dumpUser() {
    return new User(undefined, undefined, undefined, undefined, undefined);
  }

  createUser(user: User) {
    return this.http.post(this.baseUrl + '/api/user', user)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserByCredential(username: String, password: String) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((response: Response) => {
        return response.json();
      });
  }

  findUserById(userId: String) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(user: User) {
    const url =  this.baseUrl + '/api/user/' + user._id;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }

  deleteUser(userId: String) {
    const url =  this.baseUrl + '/api/user/' + userId;
    return this.http.delete(url);
  }
}
