import { ListGroup } from "react-bootstrap";

const ToDoList = ({ todos, setTodos}) => {

  const deleteTodo = (id)=> {
    const newTodos = todos.filter(todo=> todo.id !== id)
setTodos(newTodos)

  }
  return (
    <div>
      <h2 className="text-center text-secondary">Todos</h2>
      <ListGroup className="w-50 d-flex mx-auto">
        {todos.map((todo) => (
          <ListGroup.Item
            variant="info"
            className="m-2 text-capitalize rounded-2 d-flex justify-content-between"
          >
            
            <span>{todo.text}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="darkblue"
              role="button"
              onClick={()=>deleteTodo(todo.id)}
              className="bi bi-trash3-fill"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
            </svg>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ToDoList;
