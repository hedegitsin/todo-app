import {Component, inject, Input} from '@angular/core';
import {TodoItem} from "../../models/todo-item.model";
import {TodoApiListResponse} from "../../models/todo-api-list-response.model";
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  private httpClient = inject(HttpClient);

  private _todoList: Array<TodoItem> = [];
  @Input()
  set todoList(value: Array<TodoItem>) {
    this._todoList = value;
    this.setFilteredTodoLists();
  }

  openTodoList: Array<TodoItem> = [];
  completedTodoList: Array<TodoItem> = [];

  private setFilteredTodoLists() {
    this.openTodoList = this.filterTodoListByCompletion(false);
    this.completedTodoList = this.filterTodoListByCompletion(true);
  }

  private filterTodoListByCompletion(isCompleted: boolean): Array<TodoItem> {
    return this._todoList.filter(item => item.completed === isCompleted);
  }

  onTodoItemChecked(todoItem: TodoItem) {
    this.httpClient.put<TodoApiListResponse>(
      `https://dummyjson.com/todos/${todoItem.id}`,
      JSON.stringify(todoItem)
    ).subscribe(
      (result) => {
        this.setFilteredTodoLists();
      }
    )

  }
}
