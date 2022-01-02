import { combineReducers } from 'redux';

import filtersReducer from '../components/Filters/FiltersSlice';
import todoListReducer from '../components/TodoList/TodosSlice';

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer,
});

export default rootReducer;
