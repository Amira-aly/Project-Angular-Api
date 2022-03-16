import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiFunctionService } from './api-function.service';

@Injectable({
  providedIn: 'root'
})
export class UserfunctionService extends ApiFunctionService<'users'>{

  constructor(public override http: HttpClient) {
    super("http://localhost:3000/users" , http)
  }
}
