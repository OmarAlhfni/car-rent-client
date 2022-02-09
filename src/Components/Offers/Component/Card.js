import React from "react";

const Card = ({ el }) => {
  return (
    <div className="offerCard">
      <div className="offerImg">
        {/* imgg */}
        <img src={el.photo_category} alt="famile car" />
      </div>
      <h3> {el.name_category} Car </h3>
      <p>from {el.price} per/Day </p>
      <p>
        {el.descriptions_category}
      </p>
    </div>
  );
};

export default Card;
