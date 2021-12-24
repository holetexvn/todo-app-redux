export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: 'todoList/toggleTodoStatus',
    payload: todoId,
  };
};

export const searchFilterChange = (text) => {
  return {
    type: 'filters/searchFilterChange',
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: 'filters/statusFilterChange',
    payload: status,
  };
};

export const priorityFilterChange = (priorities) => {
  return {
    type: 'filters/prioritiesFilterChange',
    payload: priorities,
  };
};

// action creators => function
