import React from "react";
import "./Recommended.css";

const Recommended = () => {
  return (
    <div className="recommended">
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-flex">
        <button className="btns">All Products</button>
        <button className="btns">Nike</button>
        <button className="btns">Adidas</button>
        <button className="btns">Puma </button>
        <button className="btns">Reebok</button>
      </div>
    </div>
  );
};

export default Recommended;
