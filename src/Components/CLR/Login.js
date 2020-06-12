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

  _onChang = (e) => {
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
      <div className="contentForms">
        <form className="formInputs" onSubmit={this._onSubmit}>
          <h2 className="formInputsTitle">Login</h2>

          <label className="formInputsLab"> E-mail</label>
          <input
            className="formInput"
            name="email"
            onChange={this._onChang}
            value={email}
            type="email"
            required
            // autocomplete="off"
          />

          <label className="formInputsLab">Password</label>
          <input
            className="formInput"
            name="password"
            onChange={this._onChang}
            value={password}
            type="password"
            required
          />

          <p className="formInputsLab">Forget password ?</p>

          <button className="formInputsBtn"> Login </button>
        </form>

        <img
          src="./img/login.png"
          alt="img login"
          className="contentFormsImg"
        />
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
