import {TodoItemModel} from './todo-item.model';

export interface AppStateModel {
  readonly todo: Array<TodoItemModel>;
}

