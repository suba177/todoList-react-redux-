import TodoList from './Todo/TodoList';
import { useDispatch, useSelector } from 'react-redux';
// App
export default function App() {
  return (
    <div className="App">
      <TodoList></TodoList>
      <TodoListRedux></TodoListRedux>
    </div>
  );
}

const TodoListRedux = () => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todo);
  const value = useSelector((state) => state.todo.value);

  const addTodo = () => {
    const todoVal = {
      value,
      id: Date.now(),
      completed: false,
    };

    if (value !== '') {
      dispatch({ type: 'ADD_TODO', payload: todoVal });
    }
    dispatch({ type: 'ZEROVAL', payload: '' });
  };

  const onChangeVal = (item) => {
    dispatch({ type: 'ONCHANGE', payload: item });
  };

  const onChecked = (item) => {
    // console.log(item);
    dispatch({ type: 'ON_CHECK', payload: item.id });
  };

  const deleteTodo = (todoVal) => {
    dispatch({ type: 'DELETE_TODO', payload: todoVal.id });
  };

  const deleteAllTodo = () => {
    dispatch({ type: 'REMOVE_ALL' });
  };

  return (
    <div className="todo__list-redux">
      <h1 className="title">Todo list Redux</h1>
      <div className="todo__inner">
        <input
          tabIndex="2"
          className="input__text"
          type="text"
          value={value}
          onChange={(e) => onChangeVal(e.target.value)}></input>
        <button className="btn__add" onClick={() => addTodo()}>
          Add todo
        </button>
        <button className="btn__clear" onClick={() => deleteAllTodo()}>
          Delete all
        </button>
      </div>
      {todo.map((item, index) => {
        return (
          <div key={index} className="todo__item">
            <div className="todo__item_left">
              <input className="checkbox" type="checkbox" checked={item.completed} onChange={() => onChecked(item)} />
              <span
                className="todo__value"
                style={{
                  textDecoration: item.completed ? 'line-through' : 'none',
                }}>
                {item.value}
              </span>
            </div>
            <button onClick={() => deleteTodo(item)} className="btn__delete">
              Delete todo
            </button>
          </div>
        );
      })}
    </div>
  );
};
