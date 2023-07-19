import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header';
import ToDoList from './component/ToDoList';
import { useState } from 'react';

const todoList =[
  {
    id:1 ,
    text: "React ile todo list uygulaması",
    completed: false

  },
  {
    id:new Date().getTime() ,
    text: "uuid kullanımı",
    completed: false

  }
]

function App() {
  const [todos, setTodos] = useState(todoList)
  return (
    <div className="container">
      <Header setTodos={setTodos} todos={todos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default App
