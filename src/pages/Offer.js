import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOffer } from "../actions";

import Slider from "react-slick";
import CardOffer from "../Components/Cars/Component/CardOffer";
import { Footer, BtnScroll } from "../Components";

import "./index.css";

class Offer extends Component {
  componentDidMount() {
    const { fetchOffer } = this.props;
    fetchOffer();
  }
  
  render() {
    var settings = {
      infinite: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      rows: 1,
    };

    const { offers } = this.props;

    return (
      <div>
        <div className="carsClassificationBox">
          {/* {carType.map((el, index) => {
            return (
              <button className="carType" key={index}>
                {el.car_type}
              </button>
            );
          })} */}
        </div>

        <div className="vehiclesSlider">
          {/* <Slider {...settings}> */}
            {offers.map((el, index) => {
              return <CardOffer el={el} key={index} />;
            })}
          {/* </Slider> */}
        </div>

        <BtnScroll />

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = ({ cars }) => {
  return {
    offers: cars.offers,
  };
};

export default connect(mapStateToProps, { fetchOffer })(Offer);
