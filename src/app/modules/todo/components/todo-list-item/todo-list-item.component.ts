import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoItem} from "../../../shared/models/todo-item.model";

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent {

  @Input()
  todoItem!: TodoItem;

  @Output()
  onItemChecked = new EventEmitter<TodoItem>();

  toggleItemCompletion() {
    this.onItemChecked.emit(this.todoItem);
  }

}
