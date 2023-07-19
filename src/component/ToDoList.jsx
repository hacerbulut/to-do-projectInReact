import { ListGroup } from "react-bootstrap";

const ToDoList = ({ todos }) => {
  return (
    <div>
      <h2 className="text-center text-secondary">Todos</h2>
      <ListGroup className="w-50 d-flex mx-auto">
        {todos.map((todo) => (
          <ListGroup.Item variant="info">{todo.text}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ToDoList;
