import React, { Component } from "react";
import { connect } from "react-redux";
import { addCar } from "../../../actions";
import { operationSuccess } from "../../../actions/ac.validation";
import FormAdd from "./FormAdd";

class AddCar extends Component {
  state = {
    name: "",
    model: "",
    price: "",
    photo: [],
    available: true,
    transmissions: "manual",
    id_type: "1",
    id_color: "1",
    id_category: "1",
    success: "",
  };

  handleChang = (e) => {
    if (e.target.type === "file") {
      this.setState({ photo: e.target.files });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {
      name,
      model,
      price,
      photo,
      available,
      transmissions,
      id_type,
      id_color,
      id_category,
    } = this.state;

    const formData = new FormData();

    formData.append("name", name);
    formData.append("model", model);
    formData.append("price", price);
    formData.append("photo", photo[0]);
    formData.append("available", available);
    formData.append("transmissions", transmissions);
    formData.append("id_type", id_type);
    formData.append("id_owner", this.props.profile.id);
    formData.append("id_color", id_color);
    formData.append("id_category", id_category);

    this.props.addCar(formData);
    this.setState({
      name: "",
      model: "",
      price: "",
      photo: [],
      available: true,
      transmissions: "manual",
      id_type: "1",
      id_color: "1",
      id_category: "1",
      success: "Added successfully",
    });
  };

  render() {
    const { hidden, toggleShow, operationSuccess } = this.props;
    return (
      <FormAdd
        state={this.state}
        handleChang={this.handleChang}
        handleSubmit={this.handleSubmit}
        hidden={hidden}
        toggleShow={toggleShow}
        operationSuccess={operationSuccess}
      />
    );
  }
}
const mapStateToProps = ({ owner }) => {
  return {
    profile: owner.profile,
  };
};

export default connect(mapStateToProps, { addCar, operationSuccess })(AddCar);
