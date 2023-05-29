import {Component, inject, OnInit} from '@angular/core';
import {TodoItem} from "../../models/todo-item.model";
import {HttpClient} from "@angular/common/http";
import {TodoApiListResponse} from "../../models/todo-api-list-response.model";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  private httpClient = inject(HttpClient);

  private todoList: Array<TodoItem> = [];
  openTodoList: Array<TodoItem> = [];
  completedTodoList: Array<TodoItem> = [];

  ngOnInit(): void {
    this.httpClient.get<TodoApiListResponse>('https://dummyjson.com/todos').subscribe(
      (result) => {
        this.todoList = result.todos;
        this.setFilteredTodoLists();
      }
    )
  }

  private filterTodoListByCompletion(isCompleted: boolean): Array<TodoItem> {
    return this.todoList.filter(item => item.completed === isCompleted);
  }

  private setFilteredTodoLists() {
    this.openTodoList = this.filterTodoListByCompletion(false);
    this.completedTodoList = this.filterTodoListByCompletion(true);
  }

  onTodoItemChecked(todoItem: TodoItem) {
    this.setFilteredTodoLists();
  }
}
