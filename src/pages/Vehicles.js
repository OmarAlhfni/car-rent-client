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
  state = {
    carnetSelect: -1
  }

  componentDidMount() {
    const { fetchCar, fetchCarType } = this.props;
    fetchCar();
    fetchCarType();
  }

  toggleType = (id) => {
    const { fetchCarByTypeToVehicles, fetchCar } = this.props
    if (id === -1) {
      fetchCar()
      this.setState({ carnetSelect: id })
    }
    fetchCarByTypeToVehicles(id)
    this.setState({ carnetSelect: --id })
  };

  render() {
    var settings = {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 2,
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 620,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const { car, carType, isAuth, setBookingItem } = this.props;
    const { carnetSelect } = this.state;
    return (
      <div>
        <div className="carsClassificationBox">
          <button
            className={carnetSelect === -1 ? " carType selectCarType" : "carType"}
            onClick={() => this.toggleType(-1)}>
            ALL
          </button>
          {carType.map((el, index) => {
            return (
              <button
                className={index === carnetSelect ? " carType selectCarType" : "carType"}
                key={index}
                onClick={() => this.toggleType(++index)}
              >
                {el.car_type}
              </button>
            );
          })}
        </div>
        <div className="vehiclesSlider">
          {carnetSelect === -1 ?
            car.map((el, index) => {
              return (
                <Card
                  el={el}
                  key={index}
                  isAuth={isAuth}
                  setBookingItem={setBookingItem}
                />
              );
            })
            :

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
          }
        </div>

        <BtnScroll />
        <Footer />
      </div >
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
