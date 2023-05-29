import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {TodoItemDetailsComponent} from "./components/todo-item-details/todo-item-details.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todos'
  },
  {
    path: 'todos',
    component: TodoListComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'todos/:id',
    component: TodoItemDetailsComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
