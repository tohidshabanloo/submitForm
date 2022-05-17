import logo from "./logo.svg";
import "./App.css";
import Home from "./Home/Home";
import Test from "./Test/Test";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="home">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="test" element={<Test />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
