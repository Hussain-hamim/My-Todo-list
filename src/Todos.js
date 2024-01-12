import { useEffect, useRef, useState } from "react";
import "./css/styles.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCopyright,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo(" ");
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleKeyPress = (evt) => {
    if (evt.key === "Enter") {
      addTodo();
    }
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>My ToDo list</h2>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        {todos.map((todo) => (
          <li
            style={{
              display: "flex",
              alignItems: "center",
              margin: "8px 0",
              padding: "8px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              background: "#fff",
            }}
            key={todo.id}
          >
            <input
              type="checkbox"
              style={{ marginRight: "8px" }}
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
            />
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                opacity: todo.completed ? "0.7" : "1",
              }}
            >
              {todo.text}
            </span>
            <button
              style={{
                marginLeft: "auto",
                padding: "4px 8px",
                background: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => removeTodo(todo.id)}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
      <hr></hr>
      <div style={{ marginTop: "15px", display: "flex" }}>
        <input
          onKeyPress={handleKeyPress}
          placeholder="Add your todo here.."
          style={{
            padding: "8px",
            marginRight: "8px",
            borderRadius: "4px",
            border: "1px solid gray",
            width: "70%",
            backgroundColor: "pink",
          }}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          ref={inputRef}
        />
        <button
          style={{
            padding: "8px 16px",
            background: "#28a745",
            color: "fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={addTodo}
        >
          Add Todos
        </button>
      </div>
      <footer style={{ marginTop: "70px" }}>
        <div style={{ opacity: "0.6", fontFamily: "Arial", fontSize: "15px" }}>
          <FontAwesomeIcon style={{ paddingRight: "4px" }} icon={faCopyright} />
          Copyright Hussain Hamim 2024
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default Todos;
