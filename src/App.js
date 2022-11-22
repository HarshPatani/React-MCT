import "./App.css";
import Home from "./pages/Home";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className="App"
      style={{ backgroundColor: darkMode ? "#042743" : "white" }}
    >
      <Routes>
        <Route
          path="/"
          element={<Home setDarkMode={setDarkMode} darkMode={darkMode} />}
        />
      </Routes>
    </div>
  );
}

export default App;
