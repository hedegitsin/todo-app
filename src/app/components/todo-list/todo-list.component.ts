import { Component } from '@angular/core';
import {TodoItem} from "../../models/todo-item.model";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  todoList: Array<TodoItem> = [
    {
      id: 1,
      todo: "My first ToDo Item",
      completed: false,
      userId: 1
    },
    {
      id: 2,
      todo: "My second ToDo Item",
      completed: false,
      userId: 1
    }
  ]

  onTodoItemChecked(todoItem: TodoItem){
    if(todoItem.completed){
      this.todoList = this.todoList.filter(item => item.id !== todoItem.id);
    }
  }

}
