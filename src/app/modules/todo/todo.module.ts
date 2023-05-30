import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoListItemComponent} from "./components/todo-list-item/todo-list-item.component";
import {TodoItemDetailsComponent} from "./components/todo-item-details/todo-item-details.component";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [
    TodoListComponent,
    TodoListItemComponent,
    TodoItemDetailsComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    SharedModule
  ]
})
export class TodoModule { }
