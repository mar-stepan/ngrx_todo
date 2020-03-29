import {TodoItemModel} from '../models/todo-item.model';
import {TodoActions, TodoActionsTypes} from '../actions/todo.actions';

const initialState: Array<TodoItemModel> = [
  {
    id: '1775935f-36fd-467e-a667-09f95b917f6d',
    name: 'install NodeJS',
    checked: false
  },
  {
    id: '1775935f-36fd-467e-a667-09f95b917f4d',
    name: 'create new app',
    checked: true
  },
  {
    id: '1775935f-36fd-467e-a667-09f95b917f3d',
    name: 'develop app',
    checked: false
  },
  {
    id: '1775935f-36fd-467e-a667-09f95b917f2d',
    name: 'install Angular CLI',
    checked: false
  }
];

export function TodoReducer(
  state: Array<TodoItemModel> = initialState,
  action: TodoActions
) {
  switch (action.type) {
    case TodoActionsTypes.ADD_TODO:
      return [...state, action.payload];
    case TodoActionsTypes.COMPLETE_TODO:
      return state.map((todo) => (todo.id === action.payload.id) ? {...todo, checked: true} : todo);
    case TodoActionsTypes.DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    default:
      return state;
  }
}
