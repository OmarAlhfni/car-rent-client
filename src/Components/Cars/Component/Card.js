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
    <Link to="/carBook">
      <div className="card">

        {like()}
        <img src={el.photo} alt="car image" />
        <div>
          <h3> {el.name} </h3>
        </div>
        <p className="carTypeCard"> {el.car_model.car_type} </p>
        <div className="cardPriceBook">
          <p className="cardPrice">price/Day ${el.price} </p>
          <Link to="/carBook" className="cardBook" onClick={handleBooking}>
            Book now
          </Link>
        </div>
      </div>
    </Link>
  );
};
export default Card;
