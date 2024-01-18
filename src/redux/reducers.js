import { combineReducers } from 'redux'

import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodoListSlice"

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filtersReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action)
//   }
// }

const rootReducer = combineReducers({
  filters: filtersReducer,
  todoList: todoListReducer
})

export default rootReducer