import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment, operationSuccess } from "../../actions";

import "./index.css";

class ContactUs extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: "",
    success: "",
  };

  handelChang = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handelSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = this.state;
    const { addComment } = this.props;
    const data = {
      name,
      phone,
      email,
      message,
    };
    addComment(data);
    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
      success: "Your feedback has been sent and you will be contacted",
    });
  };
  render() {
    const { name, phone, email, message, success } = this.state;
    const { operationSuccess } = this.props;
    return (
      <div className="contentForms">
        <form className="formInputs" onSubmit={this.handelSubmit}>
          <h2 className="formInputsTitle">Contact Us</h2>

          <label className="formInputsLab">Full Name</label>
          <input
            name="name"
            onChange={this.handelChang}
            value={name}
            className="formInput"
            required
          />

          <label className="formInputsLab">Phone Number</label>
          <input
            name="phone"
            onChange={this.handelChang}
            className="formInput"
            value={phone}
            required
          />

          <label className="formInputsLab">E-Mail</label>
          <input
            name="email"
            onChange={this.handelChang}
            value={email}
            type="email"
            className="formInput"
            required
          />

          <label className="formInputsLab">Message</label>
          <textarea
            name="message"
            onChange={this.handelChang}
            value={message}
            className="formInput contactUsformtext"
            required
          />

          <button className="formInputsBtn"> Send </button>
          {operationSuccess(success)}
        </form>

        <img
          src="./img/ContactUs.png"
          alt="img contactUs"
          className="contentFormsImg"
        />
      </div>
    );
  }
}

export default connect(null, { addComment, operationSuccess })(ContactUs);
