import React from "react";

const Card = ({ el }) => {
  return (
    <div className="offerCard">
      <div className="offerImg">
        {/* imgg */}
        <img src={el.photocat} alt="famile car" />
      </div>
      <h3> {el.category} Car </h3>
      <p>from $20 per/Day </p>
      <p>
        From medium cars, to sedans, family cars, rental or even something
        special to add a touch of luxury to your journey.
      </p>
    </div>
  );
};

export default Card;
