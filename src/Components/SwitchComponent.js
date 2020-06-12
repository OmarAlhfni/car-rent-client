import React from "react";
import { connect } from "react-redux";

import { ContactUs } from "./CLR";

import { Home, Vehicles } from "../pages";

const SwitchComponent = ({ display }) => {
  let comp;
  switch (display) {
    case "Home":
      comp = <Home />;
      break;

    case "Vehicles":
      comp = <Vehicles />;
      break;

    case "Contact Us":
      comp = <ContactUs />;
      break;

    default:
      comp = null;
      break;
  }

  return comp;
};

const mapStateToProps = ({ switchs }) => ({
  display: switchs.display
});

export default connect(mapStateToProps)(SwitchComponent);
