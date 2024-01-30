import App5 from "./reactlab/App5";

function App() {
  const time = new Date();
  const day = time.toLocaleString("en-US", { weekday: "long" });
  const morning = time.getHours() >= 6 && time.getHours() <= 19;
  let dayMessage = "";
  if (day.toLowerCase() === "monday") {
    dayMessage = `happy ${day}`;
  } else if (day.toLowerCase() === "tuesday") {
    dayMessage = `${day}, four days to go`;
  }
  return (
    <>
      <h1>{dayMessage}</h1>
      {morning ? <h2>Have you had breakfast yet?</h2> : ""}
      <br></br>
      <App5></App5>
    </>
  );
}
export default App;
