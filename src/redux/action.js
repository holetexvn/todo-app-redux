export const addTodo = (todo) => {
  return {
    type: 'todoList/addTodo',
    payload: todo
  }
}

export const searchFilterChange = (text) => {
  return {
    type: 'filters/searchFilterChange',
    payload: text
  }
}
