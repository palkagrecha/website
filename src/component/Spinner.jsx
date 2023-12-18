import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Spinner = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  return (
    <>
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <h1>Comming Soon </h1>
        <h4> 🔙 back</h4>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
