import {Component, inject, OnInit} from '@angular/core';
import {TodoItem} from "../../models/todo-item.model";
import {HttpClient} from "@angular/common/http";
import {TodoApiListResponse} from "../../models/todo-api-list-response.model";
import {TodoApiService} from "../../services/todo-api.service";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  private todoApiService = inject(TodoApiService);

  private todoList: Array<TodoItem> = [];
  openTodoList: Array<TodoItem> = [];
  completedTodoList: Array<TodoItem> = [];

  ngOnInit(): void {
    this.todoApiService.getAllTodos().subscribe(
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
