import React from "react";
import "./index.css";
const Connection = () => {
  return (
    <div className="Connection">
      <div className="ConnectionCard">
        <h2 className="title">
          Get The Latest <span className="titleSpan">Car Rent</span> Updates
        </h2>
        <p>We'll Send You Some Updates & Special Offers</p>
        <form className="ConnectionCardForm">
          <input placeholder="Enter your emailaddress" />
          <button type="submit">Get Updates</button>
        </form>
      </div>
    </div>
  );
};

export default Connection;
