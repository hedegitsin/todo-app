import {Component} from '@angular/core';
import {TodoItem} from "./models/todo-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  initialTodoList: Array<TodoItem> = [
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
    },
    {
      id: 4,
      todo: "Fourth TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 5,
      todo: "Fifth TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 6,
      todo: "Sixth TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 7,
      todo: "Seventh TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 8,
      todo: "Eighth TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 9,
      todo: "Ninth TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 10,
      todo: "Tenth TODO Item",
      completed: false,
      userId: 1
    }
  ]
}
