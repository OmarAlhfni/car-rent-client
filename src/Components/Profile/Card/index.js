import React from "react";
import CardAddOffer from "./CardAddOffer";

const Card = ({
  el,
  handleDelete,
  setActiveItem,
  openModel,
  handelClickSetItem,
}) => {
  // function checks(el) {
  //   return el ? "true" : "false";
  // }

  function handleEdit() {
    setActiveItem(el);
  }

  return (
    <div className="myCard">
      {/* imgg */}
      <img className="myCardImg" src={el.photo} alt="bmw" />
      <div>
        <h3>{el.name} </h3>
        <p> model: {el.model}</p>
        <p> price: {el.price}</p>
        {/* <p> available: {checks(el.available)}</p> */}
        <p> Car Transmissions: {el.transmissions}</p>
        {/* <p> car_type: {el.car_model.car_type}</p>
        <p> category: {el.car_model.category}</p>
        <p> color: {el.car_model.color}</p> */}
      </div>
      <div className="myCardFooter">
        <button
          className="myCardBtn"
          onClick={openModel}
          onMouseDown={handleEdit}
          onMouseUp={handelClickSetItem}
        >
          Edit
        </button>
        <button
          className="myCardBtn danger"
          data-id={el.id}
          onClick={handleDelete}
        >
          Delet
        </button>
      </div>
      <CardAddOffer el={el} />
    </div>
  );
};
export default Card;
