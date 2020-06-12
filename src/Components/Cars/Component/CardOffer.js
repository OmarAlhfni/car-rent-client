import React from "react";

const CardOffer = ({ el, isAuth }) => {
  // function checks(el) {
  //   return el ? "true" : "false";
  // }

  //   function like() {
  //     if (isAuth) {
  //       return (
  //         <div className="cardLike">
  //           <i className="far fa-heart fa-2x" />
  //         </div>
  //       );
  //     }
  //   }

  return (
    <div className="card">
      {/* {like()} */}
      <div className="cardLike">
        <img src="/offer.png" alt="bmw" />

        <i className="far fa-heart fa-2x" />
      </div>
{/* imgg */}
      <img src={el.car.photo} alt="bmw" />
      <div>
        <h3> {el.car.name} </h3>
        {/* <p className="cardP"> id: {el.id_category} </p> */}

        <p className="cardP"> model: {el.car.model} </p>
        {/* <p className="cardP"> type: {el.car_model.car_type} </p> */}
        {/* <p className="cardP"> available: {checks(el.car.available)} </p> */}
        <p className="cardP"> Car Transmissions: {el.car.transmissions} </p>
        <p className="cardP"> start: {el.start.substring(0, 10)} </p>
        <p className="cardP"> end: {el.end_to.substring(0, 10)} </p>
        <p className="cardP">
          past price: <del>{el.car.price}</del>
        </p>
      </div>
      <div className="cardPriceBook">
        <p className="cardPrice">price/Day ${el.new_price}</p>
        <button className="cardBook"> Book now </button>
      </div>
    </div>
  );
};
export default CardOffer;
