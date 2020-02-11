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
  links: {
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


