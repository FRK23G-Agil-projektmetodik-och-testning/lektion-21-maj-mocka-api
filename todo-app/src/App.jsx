import './App.css';
import { useState, useEffect } from 'react';

import TodoItem from './components/TodoItem/TodoItem';
import AddTodo from './components/AddTodo/AddTodo';

function App() {
  const title = 'Todo App';
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function getTodos() {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data = await response.json();
      setTodos(data);
    }

    if (todos.length === 0) {
      getTodos();
    }
  }, []);

  const todoComponents = todos.map((todo) => {
    return <TodoItem task={todo.title} done={todo.completed} key={todo.id} />;
  });

  function updateTodos(todo) {
    console.log('I updateTodos funktion:', todo);

    todo.id = todos.length + 1;
    const newArray = [...todos]; // Gör en kopia vår todos array
    newArray.push(todo);
    setTodos(newArray);

    // Gör samma som ovan men lite mer komprimerat
    //setTodos([...todos, { id: 6, task: '', done: false } ]);
  }

  //console.log(todoComponents);

  return (
    <main className='app'>
      <h1>{title}</h1>
      <ul className='app__todos'>
        {todoComponents.length > 0 ? todoComponents : <h2>Inga todos</h2>}
      </ul>
      <AddTodo updateTodos={updateTodos} />
    </main>
  );
}

export default App;
