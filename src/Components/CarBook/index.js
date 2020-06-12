import React, { Component } from "react";
import { connect } from "react-redux";
import { CarInfo, CarBooking } from "./componenets";
import { Redirect } from "react-router-dom";

// import { displayComponent } from "../../actions";
import "./index.css";

class CarBook extends Component {
  render() {
    const { bookingItem } = this.props;
    if (Object.keys(bookingItem).length === 0) {
      return <Redirect to="/" />;
    } else {
      return (
        <div className="carBook">
          <CarInfo bookingItem={bookingItem} />
          <CarBooking />
        </div>
      );
    }
  }
}

const mapStateToProps = ({ cars }) => ({
  // display: switchs.display
  bookingItem: cars.bookingItem,
});

export default connect(mapStateToProps)(CarBook);
// export default connect(mapStateToProps, { displayComponent })(CarBook);
