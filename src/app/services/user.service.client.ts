import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from './shared.service';
import {User} from '../models/user.model.client';

// injecting service into module
@Injectable()
export class UserService {

  constructor(private http: Http, private sharedService: SharedService, private router: Router) { }

  baseUrl = environment.baseUrl;

  // api = {
  //   'createUser'   : this.createUser,
  //   'findUserById' : this.findUserById,
  //   'findUserByUsername' : this.findUserByUsername,
  //   'findUserByCredentials' : this.findUserByCredentials,
  //   'updateUser' : this.updateUser,
  //   'deleteUser' : this.deleteUser
  // };

  options = new RequestOptions();

  logout() {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/logout', '', this.options)
            .map((response: Response) => {
              return response.json();
            });
  }

  login(username: String, password: String) {
        this.options.withCredentials = true; // jga
        const body = {
            username : username,
            password : password
        };
        return this.http.post(this.baseUrl + '/api/login', body, this.options)
            .map(
              (res: Response) => {
                const data = res.json();
                return data;
              }
            );
  }

  register(username: String, password: String) {
        this.options.withCredentials = true;
        const user = {
            username : username,
            password : password
        };

        return this.http.post(this.baseUrl + '/api/register', user, this.options)
          .map(
            (res: Response) => {
              const data = res.json();
              return data;
            }
          );
  }

  loggedIn() {
        this.options.withCredentials = true;
        return this.http.post(this.baseUrl + '/api/loggedIn', '', this.options)
            .map(
              (res: Response) => {
                const user = res.json();
                if (user !== 0) {
                    this.sharedService.user = user; // setting user so as to share with all components
                    return true;
                  } else {
                    this.router.navigate(['/login']);
                    return false;
                  }
              }
            );
  }








  dumpUser() {
    return new User(undefined, undefined, undefined, undefined, undefined);
  }

  createUser(user: User) {
    const url = this.baseUrl + '/api/user';
    return this.http.post(url, user).map((response: Response) => {
      return response.json();
    });
  }

  findUserById(userId: string) {
    return this.http.get(this.baseUrl + '/api/user/' + userId)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  // findUserByUsername(username: string) {
  //   return this.http.get(this.baseUrl + '/api/user?username=' + username)
  //     .map(
  //       (res: Response) => {
  //         const data = res.json();
  //         return data;
  //       }
  //     );
  // }

  findUserByCredentials(username: string, password: string) {
    return this.http.get(this.baseUrl + '/api/user?username=' + username + '&password=' + password)
      .map((response: Response) => {
        return response.json();
      });
  }

  updateUser(userId, user) {
    const url =  this.baseUrl + '/api/user/' + user._id;
    return this.http.put(url, user).map((response: Response) => {
      return response.json();
    });
  }

  deleteUser(userId) {
    return this.http.delete(this.baseUrl + '/api/user/' + userId);
  }
}
