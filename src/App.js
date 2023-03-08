import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />

      <div>
        <Routes>
          <Route excact path="/" element={<div>Home</div>} />
          <Route path="/About" element={<div>About</div>} />
          <Route path="/Products" element={<div>Products</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
