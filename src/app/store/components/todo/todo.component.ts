import {Component, OnInit} from '@angular/core';
import {AddItemAction, DeleteItemAction, UpdateItemAction} from '../../actions/todo.actions';
import {Store} from '@ngrx/store';
import {v4 as uuid} from 'uuid';
import {AppStateModel} from '../../models/app-state.model';
import {Observable} from 'rxjs';
import {TodoItemModel} from '../../models/todo-item.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todoItems$: Observable<Array<TodoItemModel>>;
  newTodoItem: TodoItemModel = {id: '', name: '', checked: false};

  constructor(
    private store: Store<AppStateModel>
  ) {
  }

  ngOnInit(): void {
    this.todoItems$ = this.store.select(store => store.todo);
  }


  addItem(): void {
    if (this.newTodoItem.name === '') { return; }
    this.newTodoItem.id = uuid();
    this.store.dispatch(new AddItemAction(this.newTodoItem));
    this.newTodoItem = {id: '', name: '', checked: false};
  }

  deleteTodo(id: string): void {
    this.store.dispatch(new DeleteItemAction(id));
  }

  completeTodo(todo: TodoItemModel): void {
    this.store.dispatch(new UpdateItemAction(todo));
  }
}
