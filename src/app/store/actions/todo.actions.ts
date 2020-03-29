import {Action} from '@ngrx/store';
import {TodoItemModel} from '../models/todo-item.model';

export enum TodoActionsTypes {
  ADD_TODO = '[TODO] Add TODO',
  DELETE_TODO = '[TODO] Delete TODO',
  COMPLETE_TODO = '[TODO] Update TODO'
}

export class AddItemAction implements Action {
  readonly type = TodoActionsTypes.ADD_TODO;

  constructor(public payload: TodoItemModel) {
  }
}

export class DeleteItemAction implements Action {
  readonly type = TodoActionsTypes.DELETE_TODO;

  constructor(public payload: string) {
  }
}

export class UpdateItemAction implements Action {
  readonly type = TodoActionsTypes.COMPLETE_TODO;

  constructor(public payload: TodoItemModel) {
  }
}

export type TodoActions = AddItemAction | DeleteItemAction | UpdateItemAction;

