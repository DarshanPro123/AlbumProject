import React from "react";
import "./Gallary.css";
import Albums from "../Albums/Albums";

const Gallary = () => {
  return (
    <>
      <div>
        <div className="gallary">
          <h2>My Gallary</h2>
          <Albums />
        </div>
      </div>
    </>
  );
};

export default Gallary;
