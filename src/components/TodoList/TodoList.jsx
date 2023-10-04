import './Todolist.css';

const TodoList = ({
  todos,
  onDeleteTodo,
  totalTodoCount,
  complatedtodosCount,
}) => (
  <>
    <div>
      <p>Загальна кількість: {totalTodoCount}</p>
      <p>Кількість виконаних:{complatedtodosCount}</p>
    </div>
    <ul className="TodoList">
      {todos.map(({ id, text }) => (
        <li key={id} className="TodoList__item">
          <p className="TodoList__text">{text}</p>
          <button onClick={() => onDeleteTodo(id)}>Видалити</button>
        </li>
      ))}
    </ul>
  </>
);

export { TodoList };
