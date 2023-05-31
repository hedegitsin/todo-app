import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoApiListResponse} from "../models/todo-api-list-response.model";
import {TodoItem} from "../models/todo-item.model";

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  private httpClient = inject(HttpClient);
  private readonly BASE_API_URL = 'https://dummyjson.com/auth/todos';

  getAllTodos() {
    return this.httpClient.get<TodoApiListResponse>(this.BASE_API_URL)
  }

  updateTodo(todoItem: TodoItem){
    return this.httpClient.put<TodoApiListResponse>(
      `https://dummyjson.com/todos/${todoItem.id}`,
      JSON.stringify(todoItem)
    )
  }

}
