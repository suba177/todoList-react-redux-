const defaultState = {
  todo: [],
  value: '',
};

export const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return { ...state, todo: [...state.todo, action.payload] };
    case 'DELETE_TODO':
      return { ...state, todo: state.todo.filter((item) => item.id !== action.payload) };
    case 'REMOVE_ALL':
      return { ...state, todo: [] };
    case 'ONCHANGE':
      return { ...state, value: action.payload };
    case 'ZEROVAL':
      return { ...state, value: action.payload };
    case 'ON_CHECK':
      return {
        ...state,
        todo: state.todo.map((item) => {
          if (item.id === action.payload) {
            return { ...item, completed: !item.completed };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};
