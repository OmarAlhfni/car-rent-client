import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { displayComponent } from "../../actions";
import { logOut } from "../../actions";
import "./index.css";

class NavBar extends Component {
  state = {
    display: false
  }
  renderRegister = () => {
    const { isAuth, logOut } = this.props;
    if (isAuth) {
      return (
        <div className="navLR">
          <div className="navIcons">
            <i className="fas fa-search  navIcon" />
            <i className="fas fa-envelope  navIcon" />
            <i className="fas fa-bell  navIcon" />
          </div>
          <Link to="/" className="navRegister" onClick={() => logOut()}>
            logOut
          </Link>
        </div>
      );
    }
    return (
      <div className="navLR unLoginNavLR ">
        <Link to="/login">
          <button className="navLogin">Login</button>
        </Link>
        <Link to="/Register">
          <button className="navRegister">Register</button>
        </Link>
      </div>
    );
  };

  renderRegisterProf = () => {
    const { isAuth } = this.props;
    if (isAuth) {
      return (
        <Link to="/profile" className="linkColor">
          Profile
        </Link>
      );
    }
  };
  render() {
    return (
      <div className="nav">
        <Link to="/" className={this.state.display ? "navLogoLink navLogoLinkBarDark" : "navLogoLink"}>
          <img className="navLogo" src="img/logo.png" alt="logo" />
        </Link>
        <i
          class={`fas fa-bars nav-bars-icon ${this.state.display ? "nav-bars-iconBarLight" : "nav-bars-icon"}`}
          onClick={() => this.setState({ display: !this.state.display })}
        ></i>
        <div className={`containerNavUL ${this.state.display ? "containerNavUL" : "containerNavULHidden"}`}>
          <ul className="navUL">
            <li
              className="navLi"
            // onClick={() => this.props.displayComponent("Home")}
            >
              <Link to="/" className="linkColor">
                Home
              </Link>
            </li>
            <li
              className="navLi"
            // onClick={() => this.props.displayComponent("Vehicles")}
            >
              <Link to="/vehicles" className="linkColor">
                Vehicles
              </Link>
            </li>

            <li className="navLi">
              <Link to="/offer" className="linkColor">
                Offers
              </Link>
            </li>

            <li
              className="navLi"
            // onClick={() => this.props.displayComponent("Contact Us")}
            >
              <Link to="/contact" className="linkColor">
                Contact Us
              </Link>
            </li>

            <li className="navLi">{this.renderRegisterProf()}</li>
          </ul>
          {this.renderRegister()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ owner }) => {
  return {
    isAuth: owner.isAuth,
  };
};

export default connect(mapStateToProps, { displayComponent, logOut })(NavBar);
