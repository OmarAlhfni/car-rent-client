import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchCar,
  fetchCarType,
  setBookingItem,
  fetchCarByTypeToVehicles,
} from "../actions";
import Slider from "react-slick";
import Card from "../Components/Cars/Component/Card";
import { Footer, BtnScroll } from "../Components";
import "./index.css";

class Vehicles extends Component {
  componentDidMount() {
    const { fetchCar, fetchCarType } = this.props;
    fetchCar();
    fetchCarType();
  }

  toggleType = (id) => {
    const { fetchCarByTypeToVehicles } = this.props;
    fetchCarByTypeToVehicles(id);
  };

  render() {
    var settings = {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 2,
    };

    const { car, carType, isAuth, setBookingItem, fetchCar } = this.props;
    return (
      <div>
        <div className="carsdiv">
          <button className="carType" onClick={() => fetchCar()}>
            ALL
          </button>
          {carType.map((el, index) => {
            return (
              <button
                className="carType"
                key={index}
                onClick={() => this.toggleType(++index)}
              >
                {el.car_type}
              </button>
            );
          })}
        </div>

        <div className="vehiclesSlider">
          <Slider {...settings}>
            {car.map((el, index) => {
              return (
                <Card
                  el={el}
                  key={index}
                  isAuth={isAuth}
                  setBookingItem={setBookingItem}
                />
              );
            })}
          </Slider>
        </div>

        <BtnScroll />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ cars, owner }) => {
  return {
    car: cars.car,
    carType: cars.carType,
    isAuth: owner.isAuth,
  };
};

const mapDispatchToProps = {
  fetchCar,
  fetchCarType,
  setBookingItem,
  fetchCarByTypeToVehicles,
};

export default connect(mapStateToProps, mapDispatchToProps)(Vehicles);
