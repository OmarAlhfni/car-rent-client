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
      <div className="c-l-r-content">
        <div className="contentContainer">

          <form className="contentForm" onSubmit={this._onSubmit}>
            <h2 className="contentFormTitle">register</h2>

            <label className="contentFormLab">Your E-mail</label>
            <input
              className="formInput"
              name="email"
              onChange={this._onChang}
              value={email}
              type="email"
              required
            />
            {isValidEmail(email)}

            <label className="contentFormLab">Username</label>
            <input
              className="formInput"
              name="name"
              onChange={this._onChang}
              value={name}
              type="String"
              required
            />
            {isValidName(name)}

            <label className="contentFormLab">Password</label>
            <input
              className="formInput"
              name="password"
              onChange={this._onChang}
              value={password}
              type="password"
              required
            />
            {isValidPassword(password)}

            <label className="contentFormLab">Address</label>
            <input
              className="formInput"
              name="address"
              onChange={this._onChang}
              value={address}
              type="String"
              required
            />

            <label className="contentFormLab">Photo</label>
            <input type="file" name="photo" onChange={this._onChang} />

            <p className="contentFormLab">Forget password ?</p>

            <button className="contentFormBtn"> Signup </button>

            {operationSuccess(success)}
          </form>

          <img
            src="./img/register.png"
            alt="img register"
            className="contentImg"
          />
        </div>
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
