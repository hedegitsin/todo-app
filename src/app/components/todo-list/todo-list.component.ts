import {Component, Input} from '@angular/core';
import {TodoItem} from "../../models/todo-item.model";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{

  private _todoList: Array<TodoItem> = [];
  @Input()
  set todoList(value: Array<TodoItem>) {
    this._todoList = value;
    this.setFilteredTodoLists();
  }

  openTodoList: Array<TodoItem> = [];
  completedTodoList: Array<TodoItem> = [];


  private filterTodoListByCompletion(isCompleted: boolean): Array<TodoItem> {
    return this._todoList.filter(item => item.completed === isCompleted);
  }

  private setFilteredTodoLists() {
    this.openTodoList = this.filterTodoListByCompletion(false);
    this.completedTodoList = this.filterTodoListByCompletion(true);
  }

  onTodoItemChecked(todoItem: TodoItem) {
    this.setFilteredTodoLists();
  }
}
