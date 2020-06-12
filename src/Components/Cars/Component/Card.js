import React from "react";
import { Link } from "react-router-dom";

const Card = ({ el, isAuth, setBookingItem }) => {
  // function checks(el) {
  //   return el ? "true" : "false";
  // }

  function handleBooking() {
    setBookingItem(el);
  }

  function like() {
    if (isAuth) {
      return (
        <div className="cardLike">
          <i className="far fa-heart fa-2x" />
        </div>
      );
    }
  }

  return (
    <div className="card">
      {like()}
{/* imgg */}
      <img src={el.photo} alt="bmw" />
      <div className="cardInfo">
        <h3> {el.name} </h3>

        <p className="cardP"> model: {el.model} </p>
        <p className="cardP"> type: {el.car_model.car_type} </p>
        <p className="cardP"> transmissions: {el.transmissions} </p>
      </div>
      <div className="cardPriceBook">
        <p className="cardPrice">price/Day ${el.price} </p>
        <Link to="/carBook" className="cardBook" onClick={handleBooking}>
          Book now
        </Link>
      </div>
    </div>
  );
};
export default Card;
