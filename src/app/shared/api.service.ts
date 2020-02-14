import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserList(page= 1, gender= '', status= '', first_name= '', last_name = '', email= '', phone = ''): Observable<UsersList> {
  return this.http.get<UsersList>(`/users?page=${page}&gender=${gender}&status=${status}&first_name=${first_name}&last_name=${last_name}&email=${email}&phone=${phone}
  `);
  }

  getUser(id: number){
    return this.http.get<CurUserAnswer>(`/users/${id}`);
  }

  getUsersPosts(id: number) {
    return this.http.get<Array<any>>(`/posts?user_id=${id}`);
  }

  sendUserInfo(user: User) {
    console.log(user);
    return this.http.patch(`/users/${user.id}`, {user});
  }

  addUser(user: User) {
    console.log(user);
    return this.http.post(`/users`, {
      first_name: user.first_name,
      last_name: user.last_name,
      gender: user.gender,
      email: user.email,
      status: user.status
    });
  }

  deleteUser(id: number) {
    return this.http.delete(`/users/${id}`);
  }

}


// export interface PostList {
//   result: Array<Post>;
// }

export  interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
}

export interface CurUserAnswer {
  _meta: {success: true
  code: 200
  message: 'OK. Everything worked as expected.'
  };
  result: User;
}

export interface UsersList {
  _meta: {
    success: boolean,
    code: number,
    message: string,
    totalCount: number,
    pageCount: number,
    currentPage: number,
    perPage: number,
    rateLimit: {
      limit: number,
      remaining: number,
      reset: number
    },
  };
  result: Array<User>;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  dob: Date;
  email: string;
  phone: string;
  website: string;
  address: string;
  status: string;
  _links: {
    self: {
      href: string;
    };
    edit: {
      href: string;
    };
    avatar: {
      href: string;
    }
  };
}


