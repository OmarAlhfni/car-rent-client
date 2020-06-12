import React from "react";
import "./index.css";

const WayRent = () => {
  return (
    <div className="wayRent">
      <h2 className="title">
        Better Way To Find Your Perfect <span className="titleSpan"> Car</span>
      </h2>
      <p className="subTitle">
        We know the difference is in the details and that's why our car rental
        services, in the tourism and business industry, stand out for their
      </p>
      <div className="wayRentComponent">
        <div>
          <img src="/img/choose.png" alt="choose" />
          <h3>Choose Your Car</h3>
          <p className="WRCSubTitle">
            Select a car using search in our catalog.
          </p>
        </div>

        <div>
          <img src="/img/rent.png" alt="rent" />
          <h3>Rent your car</h3>
          <p className="WRCSubTitle">You can rent your car for any person </p>
        </div>

        <div>
          <img src="/img/conect.png" alt="conect" />
          <h3>Contact your dealer</h3>
          <p className="WRCSubTitle"> Your car is reedy and waiting for you</p>
        </div>
      </div>
    </div>
  );
};

export default WayRent;
