import React, { Component } from "react";
import { connect } from "react-redux";
import {
  register,
  isValidName,
  isValidPassword,
  isValidEmail,
  operationSuccess,
} from "../../actions";
import "./index.css";

class Register extends Component {
  state = {
    name: "",
    address: "",
    email: "",
    password: "",
    photo: [],
    error: "",
    success: "",
  };

  _onChang = (e) => {
    if (e.target.type === "file") {
      this.setState({ photo: e.target.files });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  _onSubmit = (e) => {
    e.preventDefault();
    const { name, address, email, password, photo } = this.state;
    const { register } = this.props;
    const checkSubmit =
      email &&
      /(^\w.*@\w+\.\w)/.test(email) &&
      !isValidName(name) &&
      !isValidPassword(password);
    const formData = new FormData();

    formData.append("name", name);
    formData.append("address", address);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("photo", photo[0]);
    if (checkSubmit) {
      register(formData);
      this.setState({
        name: "",
        address: "",
        email: "",
        password: "",
        photo: [],
        success:
          "Thanks for registering with us, please go to the login interface :)",
      });
    } else {
      this.setState({
        error: "check the fields are at the top",
      });
    }
  };

  render() {
    const { name, address, email, password, success } = this.state;
    const { operationSuccess } = this.props;
    return (
      <div className="contentForms">
        <form className="formInputs" onSubmit={this._onSubmit}>
          <h2 className="formInputsTitle">register</h2>

          <label className="formInputsLab">Your E-mail</label>
          <input
            className="formInput"
            name="email"
            onChange={this._onChang}
            value={email}
            type="email"
            required
          />
          {isValidEmail(email)}

          <label className="formInputsLab">Username</label>
          <input
            className="formInput"
            name="name"
            onChange={this._onChang}
            value={name}
            type="String"
            required
          />
          {isValidName(name)}

          <label className="formInputsLab">Password</label>
          <input
            className="formInput"
            name="password"
            onChange={this._onChang}
            value={password}
            type="password"
            required
          />
          {isValidPassword(password)}

          <label className="formInputsLab">Address</label>
          <input
            className="formInput"
            name="address"
            onChange={this._onChang}
            value={address}
            type="String"
            required
          />

          <label className="formInputsLab">Photo</label>
          <input type="file" name="photo" onChange={this._onChang} />

          <p className="formInputsLab">Forget password ?</p>

          <button className="formInputsBtn"> Signup </button>

          {operationSuccess(success)}
        </form>

        <img
          src="./img/register.png"
          alt="img register"
          className="contentFormsImg"
        />
      </div>
    );
  }
}

const mapStateToProps = ({ owner }) => {
  return {
    isRegister: owner.isRegister,
  };
};

export default connect(mapStateToProps, { register, operationSuccess })(
  Register
);
