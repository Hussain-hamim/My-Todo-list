import { useEffect, useRef, useState } from "react";
import "./css/styles.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([
        {
          id: Date.now(),
          text: newTodo,
          completed: false,
          dateTime: new Date().toLocaleDateString(undefined, {
            minute: "numeric",
            hour: "numeric",
            day: "numeric",
            month: "short",
            year: "numeric",
          }),
        },
        ...todos,
      ]);
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

  const clearAllCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "antiquewhite",
        padding: "20px",
        borderRadius: "7px",
        boxShadow: "3px 3px 3px dimgray",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>My ToDo list</h2>

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
            background: "#4688be9a",
            color: "fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={addTodo}
        >
          Add Todo
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: "0" }}>
        {todos.map((todo) => (
          <li
            style={{
              display: "flex",
              alignItems: "center",
              margin: "8px 0",
              padding: "8px",
              borderBottom: "2px solid #ddd",
              borderRadius: "4px",
              backgroundColor: "#fff8dcce",
            }}
            key={todo.id}
          >
            <input
              type="checkbox"
              style={{ marginRight: "8px" }}
              checked={todo.completed}
              onChange={() => toggleCompletion(todo.id)}
            />
            <span style={{ overflow: "clip" }}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                  opacity: todo.completed ? "0.7" : "1",
                }}
              >
                {todo.text}
              </span>
              <p style={{ opacity: "0.5", fontSize: "10px" }}>
                {todo.dateTime}
              </p>
            </span>
            <button
              style={{
                marginLeft: "auto",
                padding: "4px 8px",
                background: "#ff593cef",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
              }}
              onClick={() => removeTodo(todo.id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <hr></hr>

      <button
        style={{
          backgroundColor: "#4688be9a",
          border: "none",
          padding: "5px",
          borderRadius: "3px",
          cursor: "pointer",
          marginLeft: "30%",
        }}
        onClick={clearAllCompleted}
      >
        Clear All Completed
      </button>

      <footer style={{ marginTop: "70px" }}>
        <div style={{ opacity: "0.6", fontFamily: "Arial", fontSize: "15px" }}>
          ©Copyright 2024 Hussain Hamim
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default Todos;
