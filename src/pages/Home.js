import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCarType, fetchCarByType, fetchCategory } from "../actions";
import {
  Landing,
  WayRent,
  Cars,
  Connection,
  Footer,
  Offers,
  About,
  BtnScroll,
} from "../Components";

class Home extends Component {
  componentDidMount() {
    const { fetchCarType, fetchCarByType, fetchCategory } = this.props;
    fetchCarType();
    fetchCategory();
    fetchCarByType(1);
  }
  render() {
    return (
      <>
        <Landing />
        <WayRent />
        <Cars />
        <Offers />
        <About />
        <Connection />
        <Footer />
        {/* <BtnScroll /> */}
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchCarType,
  fetchCarByType,
  fetchCategory,
};

export default connect(null, mapDispatchToProps)(Home);
