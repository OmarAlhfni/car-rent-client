import React from "react";

const CarBooking = () => {
  return (
    <div className="carBooking">
      <div className="CBFull">
        <label className="CBlabel"> Full Name </label>
        <input className="CBInput" placeholder="Enter Your Full Name" />
      </div>

      <div className="CBHalf">
        <label className="CBlabel"> Phone Number </label>
        <label className="CBlabel"> E-Mail </label>
      </div>

      <div className="CBHalf">
        <input
          className="CBHleft CBInput"
          placeholder="Enter Your Phone Number"
        />
        <input className="CBHRight CBInput" placeholder="Enter Your E-Mail" />
      </div>

      <div className="CBFull">
        <label className="CBlabel"> CreditCard Number </label>
        <input className="CBInput" placeholder="Enter Your CreditCard Number" />
      </div>

      <div className="CBHalf">
        <label className="CBlabel"> CVV </label>
        <label className="CBlabel"> Expiration date </label>
      </div>

      <div className="CBHalf">
        <input className="CBHleft CBInput" placeholder="Enter CVV" />
        <input className="CBHRight CBInput" placeholder="Day" />
      </div>

      <div className="CBHalf">
        <label className="CBlabel"> Pick-up date </label>
        <label className="CBlabel"> Return date </label>
      </div>

      <div className="CBHalf">
        <input className="CBHleft CBInput" placeholder="Day" />
        <input className="CBHRight CBInput" placeholder="Day" />
      </div>

      <div className="CBDText">
        <label className="CBlabel"> Chat with owner </label>
        <textarea
          className="CBText CBInput"
          placeholder="Enter description"
        ></textarea>
      </div>

      <button className="CBBtn">BOOK NOW</button>
    </div>
  );
};

export default CarBooking;
