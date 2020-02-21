import React, { useState } from 'react';
import './App.css';


function App() {
  const [todos, setTodos] = useState([
    {
      text: "TODO1",
      isCompleted: false
    },
    {
      text: "TODO2",
      isCompleted: false
    },
    {
      text: "TODO3",
      isCompleted: false
    }
  ])
  const completeTodo = index => {
    const newTodos=[...todos];
    newTodos[index].isCompleted=true;
    setTodos(newTodos);
  }
  const addTodo = text => {
    const newTodos = [...todos, { text: text, isCompleted:true }];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    const newTodos=[...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }
  return (
    <div className="app">
        {todos.map((todo, index) => (
          <Todo className="todo"
            key={index}
            todo={todo}
            index={index}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("aaa");
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("aaa");
  }
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Remove</button>
      </div>
    </div>
  );
}

export default App;
