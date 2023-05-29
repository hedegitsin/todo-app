import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoApiListResponse} from "../models/todo-api-list-response.model";

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private httpClient = inject(HttpClient);
  private readonly BASE_API_URL = 'https://dummyjson.com/auth/todos';

  getAllTodos() {
    return this.httpClient.get<TodoApiListResponse>(this.BASE_API_URL)
  }
}
