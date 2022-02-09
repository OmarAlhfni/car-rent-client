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
        <img src="/offer2.png" alt="bmw" />
        <i className="far fa-heart fa-2x" />
      </div>
      <img src={el.car.photo} alt="car image" />
      <div>
        <h3> {el.car.name} </h3>
        {/* <p className="cardP"> id: {el.id_category} </p> */}

        {/* <p className="cardP"> model: {el.car.model} </p> */}
        {/* <p className="cardP"> type: {el.car_model.car_type} </p> */}
        {/* <p className="cardP"> available: {checks(el.car.available)} </p> */}
        {/* <p className="cardP"> Car Transmissions: {el.car.transmissions} </p> */}
        <div className="offerDate">
          <p><i class="far fa-calendar-alt"></i> {el.start.substring(0, 10)}</p>
          <i class="fas fa-arrow-right"></i>
          <p><i class="fas fa-calendar-alt"></i> {el.end_to.substring(0, 10)}</p>
        </div>


      </div>
      <div className="cardPriceBook">
        <div className="cardPrice">
          price/Day
          <div>
            <del>${el.car.price}</del>
            <p>${el.new_price}</p>
          </div>
        </div>
        <button className="cardBook"> Book now </button>
      </div>
    </div >
  );
};
export default CardOffer;
