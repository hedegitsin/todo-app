import {Component, OnInit} from '@angular/core';
import {TodoItem} from "../../models/todo-item.model";


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{

  private todoList: Array<TodoItem> = [
    {
      id: 1,
      todo: "My first TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 2,
      todo: "My second TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 3,
      todo: "My third TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 4,
      todo: "My fourth TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 5,
      todo: "My fifth TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 6,
      todo: "My sixth TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 7,
      todo: "My seventh TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 8,
      todo: "My eighth TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 9,
      todo: "My ninth TODO Item",
      completed: false,
      userId: 1
    },
    {
      id: 10,
      todo: "My tenth TODO Item",
      completed: false,
      userId: 1
    }
  ]

  openTodoList: Array<TodoItem> = [];
  completedTodoList: Array<TodoItem> = [];

  ngOnInit(): void {
    this.setFilteredTodoLists();
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
