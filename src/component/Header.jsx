import { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

const Header = ({todos, setTodos}) => {

  const [task, setTask] = useState("");
  const addTodo = ()=> {
    console.log(task)
    const newTodo = {
      id: uuidv4(),
      text: task,
      completed: false

    }
    console.log(newTodo)
    setTodos([...todos, newTodo])
    setTask("")
  }
  return (
    <div className="text-center text-info m-5">
      <h1>TODO LİST</h1>
      <InputGroup className="mb-3 w-50 d-flex mx-auto">
        <Form.Control
          placeholder="Enter new todo..."
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e) => setTask(e.target.value)}
          value={task}
        />
        <Button
          className="input-group-text bg-primary"
          id="basic-addon2"
          disabled={!task.trim()}
          onClick={addTodo}
        >
          Add Todo
        </Button>
      </InputGroup>
    </div>
  );
};

export default Header;
