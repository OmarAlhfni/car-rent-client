import React, { Component } from "react";
import { connect } from "react-redux";
import { addOffer } from "../../../actions";
import classNames from "classnames";

class CardAddOffer extends Component {
  state = {
    heddin: true,
    start: "",
    end_to: "",
    new_price: "",
    id_car: this.props.el.id,
    id_category: this.props.el.id_category,
  };

  toggleShow = (show) => {
    this.setState({ heddin: !this.state.heddin });
  };

  handleChang = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { start, end_to, new_price, id_car, id_category } = this.state;

    const formData = new FormData();

    formData.append("start", start);
    formData.append("end_to", end_to);
    formData.append("new_price", new_price);
    formData.append("id_car", id_car);
    formData.append("id_category", id_category);

    this.props.addOffer(formData);
    this.setState({
      start: "",
      end_to: "",
      new_price: "",
      id_car: this.props.el.id,
      id_category: this.props.el.id_category,
    });
  };

  render() {
    const { heddin } = this.state;

    return (
      <div className="myCardOffer">
        <button
          className={classNames("myCardBtnOffer", {
            heddin: !heddin,
          })}
          onClick={() => this.toggleShow()}
        >
          Add Offer
        </button>
        <form
          className={classNames({
            heddin: heddin,
          })}
          onSubmit={this.handleSubmit}
        >
          <div className="dClose">
            <button type="button" onClick={() => this.toggleShow()}>
              x
            </button>
          </div>
          <label> Start time </label>
          <input
            type="date"
            name="start"
            onChange={this.handleChang}
            className="cardOfferInp"
          />
          <label> End time </label>
          <input
            type="date"
            name="end_to"
            onChange={this.handleChang}
            className="cardOfferInp"
          />
          <label> New price </label>
          <input
            type="number"
            name="new_price"
            onChange={this.handleChang}
            className="cardOfferInp"
          />
          <button
            type="submit"
            className="cardOfferBtn"
            onClick={() => this.toggleShow()}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addOffer })(CardAddOffer);
