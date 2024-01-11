// import React from "react";
// import ReactDOM from "react-dom/client";
// // import Message, { Fruit, FavFood } from "./Message";
// // import "./css/bootstrap-5.2.3/dist/css/bootstrap.css";

// // function App() {
// //   return <div></div>;
// // }
// // export default App;

// // const me = <Message></Message>;

// // // const myFirstElement = <h1>Hello React!</h1>;

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(FavFood);

// import React from "react";
// import ReactDOM from "react-dom/client";

// const h = <h1>Hello world</h1>;

// ReactDOM.render(h, document.getElementById("root"));

// import React from "react";
// import ReactDOM from "react-dom/client";

// const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
// const mybtn = <button className="btn btn-primary">dont click me</button>;
// const inp = <input type="text" />;
// const x = 5;
// const exp = <h2>{x < 10 ? "come" : "out"}</h2>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(exp);

// class Car extends React.Component {
//   render() {
//     return <h1 >hello world 10x</h1>;
//   }
// }

// import { useState } from "react";
// import ReactDOM from "react-dom/client";
// import MyForm from "./Message";

// const myform = <MyForm></MyForm>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(myform);
// import "./css/bootstrap-5.2.3/dist/css/bootstrap.css";

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Message from "./pages/Message";
// import Layout from "./pages/Layout";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="message" element={<Message />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import Home from "./pages/Home";
// import "./css/sassy.scss";

// const head = <h1>heading one  </h1>;

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(head);

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         className="btn btn-danger"
//         type="button"
//         onClick={() => setColor("blue")}
//       >
//         Blue
//       </button>
//       <button
//         className="btn btn-info"
//         type="button"
//         onClick={() => setColor("red")}
//       >
//         Red
//       </button>
//       <button
//         className="btn btn-outline-info"
//         type="button"
//         onClick={() => setColor("pink")}
//       >
//         Pink
//       </button>
//       <button type="button" onClick={() => setColor("green")}>
//         Green
//       </button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FavoriteColor />);

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import "./css/bootstrap-5.2.3/dist/css/bootstrap.css";

// function FavoriteColor() {
//   const [car, setCar] = useState({
//     name: "hamim's car",
//     driver: "Hussain",
//   });
//   const [color, setColor] = useState("red");
//   const [model, setModel] = useState("Mustang");
//   const [year, setYear] = useState("2024");

//   const updateDriver = () => {
//     setCar((prev) => {
//       return { ...prev, driver: "mangal" };
//     });
//   };

//   return (
//     <>
//       <h1>
//         this is {car.name} and driver is {car.driver}
//       </h1>
//       <h1 style={{ backgroundColor: color }}>
//         My favorite color is {color}! and car is {model}, {year}{" "}
//       </h1>

//       <button onClick={updateDriver}>change driver</button>

//       <button
//         onClick={() => {
//           setColor("green");
//           setModel("new model");
//           setYear(2020);
//         }}
//       >
//         green
//       </button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<FavoriteColor />);

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);
//   const [calc, setCalc] = useState(0);

//   useEffect(() => {
//     setCalc(() => count * 2);
//   }, [count]);

//   return (
//     <>
//       <p>count: {count}</p>
//       <button onClick={setCount((c) => c + 1)} className="btn btn-info">
//         +
//       </button>
//       <p>calculation: {calc}</p>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Timer />);

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";
// import Timer from "./pages/Home";
// function Counter() {
//   const [count, setCount] = useState(0);
//   const [calculation, setCalculation] = useState(0);

//   useEffect(() => {
//     setCalculation(() => count * 2);
//   }, [count]); // <- add the count variable here

//   return (
//     <>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount((c) => c + 1)} className="btn btn-info">
//         +
//       </button>
//       <p>Calculation: {calculation}</p>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Timer />);

// import { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";

// function Component1() {
//   const [user, setUser] = useState("Jesse Hall");
//   const UserContext = createContext();
//   const users = useContext(UserContext);

//   return (
//     <UserContext.Provider value={users}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 user={users} />
//     </UserContext.Provider>
//   );
// }

// function Component2({ users }) {
//   return (
//     <>
//       <h1>Component 2 {users} </h1>
//     </>
//   );
// }

// function Component3({ users }) {
//   return (
//     <>
//       <h1>Component 3 {users}</h1>
//     </>
//   );
// }

// function Component5({ users }) {
//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${users} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Component1 />);

// import { useState, useEffect, useRef } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState();
//   const count = useRef(0);

//   return (
//     <>
//       <button
//         type="button"
//         onClick={() => {
//           setInputValue(() => (count.current = count.current + 1));
//         }}
//       >
//         increase
//       </button>

//       <h1>the count is: {inputValue}</h1>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// import { useEffect, useRef, useState } from "react";
// import ReactDOM from "react-dom/client";

// function App() {
//   const [inputValue, setInputValue] = useState("");
//   const prevValues = useRef("");

//   useEffect(() => {
//     prevValues.current = inputValue;
//   }, [inputValue]);

//   return (
//     <>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={(e) => setInputValue(e.target.value)}
//       />
//       <h2>current value: {inputValue}</h2>
//       <h2>prevs value: {prevValues.current}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

// import { useReducer } from "react";
// import ReactDOM from "react-dom/client";

// const initialTodos = [
//   {
//     id: 1,
//     title: "Todo 1",
//     complete: false,
//   },
//   {
//     id: 2,
//     title: "Todo 2",
//     complete: false,
//   },
// ];

// const reducer = (state, action) => {
//   switch (action.type) {
//     case "COMPLETE":
//       return state.map((todo) => {
//         if (todo.id === action.id) {
//           return { ...todo, complete: !todo.complete };
//         } else {
//           return todo;
//         }
//       });
//     default:
//       return state;
//   }
// };

// function Todos() {
//   const [todos, dispatch] = useReducer(reducer, initialTodos);

//   const handleComplete = (todo) => {
//     dispatch({ type: "COMPLETE", id: todo.id });
//   };

//   return (
//     <>
//       {todos.map((todo) => (
//         <div key={todo.id}>
//           <label>
//             <input
//               type="checkbox"
//               checked={todo.complete}
//               onChange={() => handleComplete(todo)}
//             />
//             {todo.title}
//           </label>
//         </div>
//       ))}
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Todos />);

// import { useState, useCallback } from "react";
// import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);

//   //incrementing the count by one
//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   //add new todo by this func
//     const addTodo = useCallback(() => {
//       setTodos((t) => [...t, (<input type="text"/>)]);
//     }, [todos]);
//   return (
//     <>
//       <Todos todos={todos} addTodo={addTodo}></Todos>
//       <hr></hr>
//       <div>
//         Count: {count}
//         <button
//           className="btn btn-primary"
//           style={{ marginLeft: 10 }}
//           onClick={increment}
//         >
//           +
//         </button>
//       </div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

//////***************************************************************** */

// import { useMemo, useState } from "react";
// import ReactDOM from "react-dom/client";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState([]);
//   const calculation = useMemo(() => expensiveCalculation(count), [count]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };
//   const addTodo = () => {
//     setTodos((t) => [...t, "New Todo"]);
//   };

//   return (
//     <div>
//       <div>
//         <h2>My Todos</h2>
//         {todos.map((todo, index) => {
//           return <p key={index}>{todo}</p>;
//         })}
//         <button onClick={addTodo}>Add Todo</button>
//       </div>
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//         <h2>Expensive Calculation</h2>
//         {calculation}
//       </div>
//     </div>
//   );
// };

// const expensiveCalculation = (num) => {
//   console.log("Calculating...");
//   for (let i = 0; i < 100000000; i++) {
//     num += 1;
//   }
//   return num;
// };

import { useMemo, useState } from "react";
import ReactDOM from "react-dom/client";

import Todos from "./Todos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Todos />);
