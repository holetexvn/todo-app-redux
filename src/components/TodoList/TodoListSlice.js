const initValue = [
  {
    id: 1,
    name: 'Learn React',
    priority: 'High',
    completed: false
  },
  {
    id: 2,
    name: 'Learn Redux',
    priority: 'Medium',
    completed: true
  },
  {
    id: 3,
    name: 'Learn Antd',
    priority: 'Low',
    completed: false
  }
]

const todoListReducer = (state = initValue, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

export default todoListReducer