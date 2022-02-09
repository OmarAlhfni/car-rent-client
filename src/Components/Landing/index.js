import React, { Component } from "react";
// import NavBar from "../NavBar";
import "./index.css";

class Landing extends Component {
  render() {
    return (
      <div className="Landing">
        {/* <NavBar /> */}
        <div className="LandingImg">
          <div className="landComponent">
            <h1 className="landTitle title">
              Rent A <span className="titleSpan">CAR</span>
              <br />
              <span className="titleSpan">&</span>
              <br />
              RENT YOUR <span className="titleSpan"> CAR</span>
            </h1>
            {/* <p className="title landSubTitle">
              search for your<span className="titleSpan"> car</span>
            </p> */}
            <div className="boxSearch">
              <form className="LandingSearch">
                <input className="LandingSearchInp" placeholder="search for your car" />
                <button className="LandingSearchBtn">
                  <i className="fas fa-search" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
