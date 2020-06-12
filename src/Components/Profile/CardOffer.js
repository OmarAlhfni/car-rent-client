import React from "react";

const CardOffer = ({ el, handleDelete }) => {
  return (
    <div className="myCard">
      {/* imgg */}
      <img className="myCardImg" src={el.car.photo} alt="bmw" />

      <div>
        <h3>{el.car.name} </h3>
        <p> model: {el.car.model}</p>
        <p> price: {el.new_price}</p>
        <p> start: {el.start.substring(0, 10)}</p>
        <p> end: {el.end_to.substring(0, 10)}</p>
        
      </div>

      {/* <div className="myCardFooter">
        <button
          className="myCardBtn"
          onClick={openModel}
          onMouseDown={handleEdit}
          onMouseUp={handelClickSetItem}
        >
          Edit
        </button> */}
        <button
          className="cardOfferBtn danger"
          data-id={el.id_offer}
          onClick={handleDelete}
        >
          Delet
        </button>
      {/* </div> */}
    </div>
  );
};
export default CardOffer;
