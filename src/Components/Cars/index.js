import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCarByType, setBookingItem } from "../../actions";
import CardSlider from "./Component/CardSlider";

import "./index.css";

class Cars extends Component {
  state = {
    carnetSelect: 0
  }
  toggleType = (id) => {
    const { fetchCarByType } = this.props;
    fetchCarByType(id);
    this.setState({ carnetSelect: --id })
  };

  render() {

    const {
      carType,
      isAuth,
      typeOfCar,
      setBookingItem,
      bookingItem,
      car,
    } = this.props;
    return (
      <div className="cars">
        <h2 className="title">
          Better Way To Find Your Perfect
          <span className="titleSpan"> Car </span>
        </h2>
        <p className="subTitle">
          We know the difference is in the details and that's why our car rental
          services, in the tourism and business industry, stand out for their
        </p>

        <div className="carsClassificationBox">
          {carType.map((el, index) => {
            return (
              <button
                onClick={() => this.toggleType(++index)}
                className={index === this.state.carnetSelect ? " carType selectCarType" : "carType"}
                key={index}
              >
                {el.car_type}
              </button>
            );
          })}
        </div>

        <CardSlider
          Cars={typeOfCar}
          isAuth={isAuth}
          setBookingItem={setBookingItem}
          bookingItem={bookingItem}
        />

        <Link to="/vehicles">
          <p className="carsNumber">
            <span>3.520 Results </span>looking for a car? choose a brand.
          </p>
        </Link>
      </div>
    );
  }
}

Cars.defaultProps = {
  carType: [],
};

const mapStateToProps = ({ cars, owner }) => {
  return {
    car: cars.car,
    carType: cars.carType,
    isAuth: owner.isAuth,
    typeOfCar: cars.typeOfCar,
    bookingItem: cars.bookingItem,
  };
};

export default connect(mapStateToProps, { fetchCarByType, setBookingItem })(
  Cars
);
