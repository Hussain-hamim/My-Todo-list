import "./App5.css";
import Homepage from "./Homepage";
import AboutLittleLemon from "./AboutLittleLemon";
import { Routes, Route, Link } from "react-router-dom";
import   "./Contact";

function App5() {
  // const day = new Date().getDay();

    return (
    <div>
      <nav>
        <Link to="/" className="nav-item">
          Homepage
        </Link>
        <Link to="/about" className="nav-item">
          About Little Lemon
        </Link>
        <Link to="/contact" className="nav-item">
          Contact Us
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<AboutLittleLemon />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App5;
