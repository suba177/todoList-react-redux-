export default function TodoItem({ item, deleteTodo, onComplete }) {
  return (
    <div className="todo__item">
      <div className="todo__item_left">
        <input className="checkbox" type="checkbox" checked={item.completed} onChange={() => onComplete(item)} />
        <span
          className="todo__value"
          style={{
            textDecoration: item.completed ? 'line-through' : 'none',
          }}>
          {item.value}
        </span>
      </div>
      <button className="btn__delete" onClick={() => deleteTodo(item)}>
        Delete todo
      </button>
    </div>
  );
}
