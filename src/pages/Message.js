// function Message() {
//   const name = "hussain";
//   const age = 22;
//   return (
//     <>
//       <h1>
//         {name} is {age} years old.
//       </h1>
//     </>
//   );
// }
// export const FavFood = "dandakai";
// export const Fruit = "apple";

// export default Message;
// import React from "react";
// import ReactDOM from "react-dom/client";

// function MissedGoal() {
//   return <h1>Missed</h1>;
// }

// function MadeGoal() {
//   return <h1>Goal</h1>;
// }

// function Car(pro) {
//   // const isGoal = pro.isGoal;
//   if (pro.isGoal) {
//     return <MadeGoal />;
//   }
//   return <MissedGoal />;
// }

// export default Car;

// import { useState } from "react";

// function MyForm() {
//   const [textarea, setTextarea, name, setName] = useState("");

//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     alert(`the name you entered is: ${name}`);
//   };
//   const handleChange = (evt) => {
//     setTextarea(evt.target.value);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <label>
//           enter your name:
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </label>
//         <br />
//         <br />
//         <textarea value={textarea} onChange={handleChange} />
//       </form>
//       <p>
//         your name is: <b className="text-uppercase">{name}</b>
//       </p>
//       <p>
//         your comment: <b className="text-uppercase">{textarea}</b>
//       </p>
//     </>
//   );
// }

// function MyForm() {
//   const [myCar, setMyCar] = useState("Fiat");

//   const handleChange = (event) => {
//     setMyCar(event.target.value);
//   };

//   return (
//     <form>
//       <select value={myCar} onChange={handleChange}>
        // <option value="Ford">Ford</option>
//         <option value="Volvo">Volvo</option>
//         <option value="Fiat">Fiat</option>
//       </select>
//     </form>
//   );
// }
// export default MyForm;


// import "./css/bootstrap-5.2.3/dist/css/bootstrap.css";

function Message() {
  return <h1>this is Message page</h1>;
}

export default Message;