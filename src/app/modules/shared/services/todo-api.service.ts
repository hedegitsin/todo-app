import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoApiListResponse} from "../models/todo-api-list-response.model";
import {TodoItem} from "../models/todo-item.model";
import {AuthenticationService} from "./authentication.service";

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private authenticationService = inject(AuthenticationService);
  private httpClient = inject(HttpClient);
  private readonly BASE_API_URL = 'https://dummyjson.com/auth/todos';

  getAll() {
    return this.httpClient.get<TodoApiListResponse>(this.BASE_API_URL)
  }

  getById(id: number) {
    return this.httpClient.get<TodoItem>(`${this.BASE_API_URL}/${id}`)
  }

  upsert(todoItem: TodoItem) {

    const payload = JSON.stringify(todoItem)

    if (todoItem.id) {
      return this.httpClient.put(`${this.BASE_API_URL}/${todoItem.id}`, payload)
    } else {
      return this.httpClient.post(`${this.BASE_API_URL}/add`, payload)
    }
  }
}
