import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import ToDoList from './component/ToDoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])
  return (
    <div className="container">
      <Header setTodos={setTodos} todos={todos} />
      <ToDoList todos={todos} />
    </div>
  )
}

export default App
