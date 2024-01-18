import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search
export const filterStatusSelector = (state) => state.filters.status
export const todoListSelector = (state) => state.todoList
export const filterPrioritiesSelector = (state) => state.filters.priorities

// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state)

//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText)
//   })

//   return todosRemaining
// }
// reselect

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  searchTextSelector,
  (todoList, status, priorities, searchText) => {
    return todoList.filter(todo => {
      if (status === 'All') {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText)
      }

      return (
        todo.name.includes(searchText) && (status === 'Completed' ? todo.completed : !todo.completed) && (priorities.length ? priorities.includes(todo.priority) : true)
      )
    })
  }
)