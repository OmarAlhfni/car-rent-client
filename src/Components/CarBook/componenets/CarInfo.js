import React from "react";

const CarInfo = ({ bookingItem }) => {
  return (
    <div className="carInfo">
      <img
      // imgg
        src={bookingItem.photo}
        alt="carInfo"
        className="carInfoImg"
      />
      <div className="carInfoInfo">
        <h2 className="carInfoTitle">{bookingItem.name}</h2>
        <p>model: {bookingItem.model}</p>
        <p>price: {bookingItem.price}</p>
        <p>car type: {bookingItem.id_type}</p>
        <p>id_color: {bookingItem.id_color}</p>
        <p>id_category: {bookingItem.id_category}</p>
        <p>available: {bookingItem.available}</p>
        <p>Car Transmissions: {bookingItem.transmissions}</p>

        <h2 className="carInfoprice">Price/Day $75</h2>
      </div>
    </div>
  );
};

export default CarInfo;
