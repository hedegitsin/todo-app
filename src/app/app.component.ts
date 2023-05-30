import { Component } from '@angular/core';
import {TodoItem} from "./models/todo-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoList: Array<TodoItem> = [
    {
      id: 1,
      todo: "First TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 2,
      todo: "Second TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 3,
      todo: "Third TODO Item",
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
