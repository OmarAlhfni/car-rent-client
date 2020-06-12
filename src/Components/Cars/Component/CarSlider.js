import React, { Component } from "react";
import Slider from "react-slick";
import Card from "./Card";

class CarSlider extends Component {
  render() {
    // const { rowNum } = this.props;

    var settings = {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 2,
      dots: true
    };

    return (
      <div className="cars">
        <div className="carsdiv">
          <button>BMW</button>
          <button>AUDI</button>
          <button>MERCEDS</button>
          <button>DOODGE</button>
          <button>HYUNDAI</button>
        </div>

        <div className="carsSlider">
          <Slider {...settings}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Slider>
        </div>
      </div>
    );
  }
}

export default CarSlider;
