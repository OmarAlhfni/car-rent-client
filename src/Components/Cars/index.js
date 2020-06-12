import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { fetchCarByType, setBookingItem } from "../../actions";
import Card from "./Component/Card";

import "./index.css";

class Cars extends Component {
  toggleType = (id) => {
    const { fetchCarByType } = this.props;
    fetchCarByType(id);
  };

  render() {
    var settings = {
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      rows: 1,
      // dots: true,
    };

    const {
      carType,
      isAuth,
      typeOfCar,
      setBookingItem,
      bookingItem,
      car,
    } = this.props;

    console.log("car:", car);
    console.log("carType:", carType);
    console.log("isAuth:", isAuth);
    console.log("typeOfCar:", typeOfCar);

    console.log("car:", car);

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

        <div className="carsdiv">
          {carType.map((el, index) => {
            return (
              <button
                onClick={() => this.toggleType(++index)}
                className="carType"
                key={index}
              >
                {el.car_type}
              </button>
            );
          })}
        </div>
        <div className="carsSlider">
          <Slider {...settings}>
            {typeOfCar &&
              typeOfCar.map((el, index) => {
                return (
                  <Card
                    el={el}
                    key={index}
                    isAuth={isAuth}
                    setBookingItem={setBookingItem}
                    bookingItem={bookingItem}
                  />
                );
              })}
          </Slider>
        </div>
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
