import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TodoApiListResponse} from "./models/todo-api-list-response.model";
import {TodoItem} from "./models/todo-item.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  private httpClient = inject(HttpClient);

  initialTodoList: Array<TodoItem> = [];

  ngOnInit(): void {
    this.httpClient.get<TodoApiListResponse>('https://dummyjson.com/todos').subscribe(
      (result) => {
        this.initialTodoList = result.todos;
      }
    )
  }


}
