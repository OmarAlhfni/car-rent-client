import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateComponent = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuth ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const mapStateToProps = ({ owner }) => {
  return {
    isAuth: owner.isAuth
  };
};

export default connect(mapStateToProps)(PrivateComponent);
