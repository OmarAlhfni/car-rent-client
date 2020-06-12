import React, { Component } from "react";
import classNames from "classnames";

class FormAdd extends Component {
  render() {
    const {
      state,
      handleChang,
      handleSubmit,
      hidden,
      toggleShow,
      operationSuccess,
    } = this.props;
    const {
      name,
      model,
      price,
      transmissions,
      id_type,
      id_color,
      id_category,
      success,
    } = state;

    return (
      <form
        className={classNames("conmR addCar", {
          headen: hidden,
        })}
        onSubmit={handleSubmit}
      >
        <div className="dClose">
          <button className="close" onClick={() => toggleShow()}>
            &#10006;
          </button>
        </div>

        <div className="addCarI">
          <label>name:</label>
          <input
            type="text"
            name="name"
            className="addCarInp"
            onChange={handleChang}
            value={name}
            required
          />
        </div>
        <div className="addCarI">
          <label>model:</label>
          <input
            type="text"
            name="model"
            className="addCarInp"
            onChange={handleChang}
            value={model}
            required
          />
        </div>
        <div className="addCarI">
          <label>price:</label>
          <input
            type="number"
            name="price"
            className="addCarInp"
            onChange={handleChang}
            value={price}
            required
          />
        </div>

        <div className="addCarI">
          <label>type:</label>
          <select
            name="id_type"
            className="addCarSel"
            onChange={handleChang}
            value={id_type}
            required
          >
            <option value="1">BMW</option>
            <option value="2">AUDI</option>
            <option value="3">MERCEDES</option>
            <option value="4">DODGE</option>
            <option value="5">HYUNDAI</option>
          </select>
        </div>

        <div className="addCarI">
          <label>color:</label>
          <select
            name="id_color"
            className="addCarSel"
            onChange={handleChang}
            value={id_color}
            required
          >
            <option value="1">White</option>
            <option value="2">Silver</option>
            <option value="3">Black</option>
            <option value="4">Dark Blue</option>
            <option value="5">Dark Gray</option>
            <option value="6">Red</option>
            <option value="7">Dark Green</option>
            <option value="8">Brown</option>
            <option value="9">Gold </option>
          </select>
        </div>
        <div className="addCarI">
          <label>category:</label>
          <select
            name="id_category"
            className="addCarSel"
            onChange={handleChang}
            value={id_category}
            required
          >
            <option value="1">Small</option>
            <option value="2">Medium</option>
            <option value="3">Large</option>
          </select>
        </div>

        <div className="addCarI">
          <label>transmissions:</label>
          <select
            name="transmissions"
            className="addCarSel"
            onChange={handleChang}
            value={transmissions}
          >
            <option value="manual">Manual "gear"</option>
            <option value="automatic">Automatic</option>
          </select>
        </div>

        <div className="addCarI">
          <label>photo:</label>
          <input type="file" name="photo" onChange={handleChang} required />
        </div>

        {operationSuccess(success)}

        <button type="submit" className="addCarBtn">
          SUBMIT
        </button>
      </form>
    );
  }
}

export default FormAdd;
