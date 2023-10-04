import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import { TodoList } from './TodoList/TodoList';
import { Toggle } from './Toggle/Toggle';
import { Component } from 'react';

// JSON
import initialTodos from 'components/Data/todolist.json';
import colorPicker from 'components/Data/colorPicker.json';

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };
  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const complatedtodosCount = todos.reduce(
      (total, todo) => (todo.complete ? total + 1 : total),
      0
    );

    return (
      <>
        <Counter initialValue={10}></Counter>
        <Toggle>RANDOM TEXT</Toggle>
        <ColorPicker options={colorPicker}></ColorPicker>
        {/*  */}

        <TodoList
          todos={todos}
          onDeleteTodo={this.deleteTodo}
          totalTodoCount={totalTodoCount}
          complatedtodosCount={complatedtodosCount}
        ></TodoList>
      </>
    );
  }
}

export { App };
