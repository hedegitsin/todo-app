import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {AuthenticationGuard} from "../shared/guards/authentication.guard";
import {TodoItemDetailsComponent} from "./components/todo-item-details/todo-item-details.component";

const routes: Routes = [
  {
    path: '',
    component: TodoListComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: ':id',
    component: TodoItemDetailsComponent,
    canActivate: [AuthenticationGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
