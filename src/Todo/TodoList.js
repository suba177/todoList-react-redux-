import { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([]);

  const addTodo = () => {
    if (value !== '') {
      setTodo([...todo, { value, completed: false }]);
    }
    setValue('');
  };

  document.addEventListener('keydown', function (event) {
    if (event.code === 'Enter') {
      addTodo();
    }
  });

  const deleteTodo = (item) => {
    setTodo(todo.filter((todo) => todo !== item));
  };

  const completeTodo = (item) => {
    setTodo(todo.map((todo) => (todo === item ? { ...todo, completed: !todo.completed } : todo)));
  };

  const clearAll = () => {
    setTodo([]);
  };

  return (
    <div className="todo__list">
      <h1 className="title">Todo list React Hooks</h1>
      <div className="todo__inner">
        <input
          tabIndex="1"
          className="input__text"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}></input>
        <button className="btn__add" onClick={addTodo}>
          Add todo
        </button>
        <button className="btn__clear" onClick={clearAll}>
          Delete all
        </button>
      </div>
      {todo.map((item, index) => (
        <TodoItem key={index} item={item} deleteTodo={deleteTodo} onComplete={completeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
