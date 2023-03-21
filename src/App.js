import logo from './logo.svg';
import './App.css';
import { useTodos } from './hooks/useTodos';
import { useState } from 'react';

function App() {
  const [userId, setUserId] = useState(5);
  const [newTodo, setNewTodo] = useState('');
  const {todos, todosLoading, create} = useTodos(userId);
  const createNewTodo = () => {
    create(newTodo);
    setNewTodo('');
  };
  console.log('app');
  return (
    <div className="App">
      <header className="App-header">
        {todosLoading ? 
      "Loading":
      <>
      <div>Todos:</div>  
      <input value={userId} onChange={event => setUserId(event.target.value)}/>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.todo}</li>
          ))}
      </ul>
      </>
      }
      <input value={newTodo} onChange={event => setNewTodo(event.target.value)}/>
      <button onClick={() => createNewTodo()}>Create Todo</button>
      </header>
    </div>
  );
}

export default App;
