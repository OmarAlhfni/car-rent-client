import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../actions";
import "./index.css";

class Login extends Component {
  componentDidUpdate() {
    if (this.props.isAuth) {
      this.props.history.push("/");
    }
  }

  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  _onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };
    this.props.login(data);
    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    const { email, password } = this.state;

    return (
      <div className="c-l-r-content">
        <div className="contentContainer">

          <form className="contentForm" onSubmit={this._onSubmit}>
            <h2 className="contentFormTitle">Login</h2>

            <label className="contentFormLab"> E-mail</label>
            <input
              className="formInput"
              name="email"
              onChange={this.onChange}
              value={email}
              type="email"
              required
            // autocomplete="off"
            />

            <label className="contentFormLab">Password</label>
            <input
              className="formInput"
              name="password"
              onChange={this.onChange}
              value={password}
              type="password"
              required
            />

            <p className="contentFormLab">Forget password ?</p>

            <button className="contentFormBtn"> Login </button>
          </form>
          {/* <div className="contentGridLayer"></div> */}

          <img
            src="./img/login.png"
            alt="img login"
            className="contentImg"
          />
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

export default connect(mapStateToProps, { login })(Login);
