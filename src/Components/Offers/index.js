import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Card from "./Component/Card";
import { connect } from "react-redux";
import "./index.css";

class Offers extends Component {
  render() {
    var settings = {
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1,
    };
    const { category } = this.props;
    // console.log("category :", category);

    return (
      <div className="offer">
        {/* <div className="Line">|</div> */}
        <h2 className="title">OFFERS</h2>
        <p className="subTitle">
          Check latest offers and grab a discounted car for your trip!
        </p>

        <div className="offerSlider">
          {/* <Slider {...settings}> */}
          {category &&
            category.map((el, index) => {
              return <Card el={el} key={index} />;
            })}

          {/* </Slider> */}
        </div>

        <Link to="/offer">
          <p className="OfferNumber">
            To see more of offers please <span>Click Here</span>
          </p>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = ({ cars }) => {
  return {
    category: cars.category,
  };
};

export default connect(mapStateToProps)(Offers);
