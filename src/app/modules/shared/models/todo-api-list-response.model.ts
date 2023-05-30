import {TodoItem} from "./todo-item.model";

export interface TodoApiListResponse {
  limit: number,
  skip: number,
  total: number,
  todos: Array<TodoItem>,
}
