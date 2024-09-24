import "./App.css";
import React from "react";
import Gallary from "../src/components/Gallary/Gallary";
import Photos from "../src/components/Photos/Photos.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <h1 className="head">
          <a href="/">My album</a>
        </h1>
        {/* <Gallary /> */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Gallary />} />
            <Route path="/album/:id" element={<Photos />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
