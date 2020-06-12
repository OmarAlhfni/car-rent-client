import React from "react";
import classNames from "classnames";

const ModelProfile = ({
  heddin,
  openModel,
  closeModel,
  state,
  handleSubmitEdit,
  handleChange,
}) => {
  const {
    name,
    model,
    price,
    transmissions,
    id_type,
    id_color,
    id_category,
  } = state;
  return (
    <div
      className={classNames("editMyCar", { heddin: heddin })}
      onClick={closeModel}
    >
      <div className="contEdit" onClick={openModel}>
        {/* close */}
        <div className="closeM" onClick={closeModel}>
          &#10006;
        </div>

        {/* form */}
        <form className="addCar" onSubmit={handleSubmitEdit}>
          <h2 className="editTitle"> Update your car ! </h2>
          <div className="addCarI">
            <label>name:</label>
            <input
              type="text"
              name="name"
              className="addCarInp"
              onChange={handleChange}
              value={name}
            />
          </div>
          <div className="addCarI">
            <label>model:</label>
            <input
              type="text"
              name="model"
              className="addCarInp"
              onChange={handleChange}
              value={model}
            />
          </div>
          <div className="addCarI">
            <label>price:</label>
            <input
              type="number"
              name="price"
              className="addCarInp"
              onChange={handleChange}
              value={price}
            />
          </div>

          <div className="addCarI">
            <label>car type:</label>
            <select
              name="id_type"
              className="addCarSel"
              onChange={handleChange}
              value={id_type}
            >
              <option value="1">BMW</option>
              <option value="2">AUDI</option>
              <option value="3">MERCEDES</option>
              <option value="4">DODGE</option>
              <option value="5">HYUNDAI</option>
            </select>
          </div>

          <div className="addCarI">
            <label>id_color:</label>
            <select
              name="id_color"
              className="addCarSel"
              onChange={handleChange}
              value={id_color}
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
            <label>id_category:</label>
            <select
              name="id_category"
              className="addCarSel"
              onChange={handleChange}
              value={id_category}
            >
              <option value="1">Small</option>
              <option value="2">Medium</option>
              <option value="3">Large</option>
            </select>
          </div>

          <div className="addCarI">
            <label>Car Transmissions:</label>
            <select
              name="transmissions"
              className="addCarSel"
              onChange={handleChange}
              value={transmissions}
            >
              <option value="manual">Manual "gear"</option>
              <option value="automatic">Automatic</option>
            </select>
          </div>

          <div className="addCarI">
            <label>photo:</label>
            <input type="file" name="photo" onChange={handleChange} />
          </div>

          <button type="submit" className="addCarBtn">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModelProfile;
