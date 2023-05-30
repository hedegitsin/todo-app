import {Component, Input, OnInit} from '@angular/core';
import {TodoItem} from "../../models/todo-item.model";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent{

  @Input()
  todoList: Array<TodoItem> = [];

  onTodoItemChecked(todoItem: TodoItem) {
    if(todoItem.completed){
      this.todoList = this.todoList.filter(item => item.id !== todoItem.id);
    }
  }
}
