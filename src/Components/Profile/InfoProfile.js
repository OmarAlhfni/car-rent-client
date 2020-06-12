import React, { Component } from "react";
import classNames from "classnames";

class InfoProfile extends Component {
  render() {
    const { hidden, toggleShow } = this.props;
    return (
      <div
        className={classNames("conmR", {
          headen: hidden
        })}
      >
        <div className="statProfile">
          <div className="statProfileComp">
            <div>
              <span>Favorite</span>
              <p>10</p>
            </div>
            <span className="linee"></span>
            <div>
              <span>Likes</span>
              <p>13</p>
            </div>
            <span className="linee"></span>
            <div>
              <span>comments</span>
              <p>5</p>
            </div>
            <span className="linee"></span>
            <button className="statAdd" onClick={() => toggleShow()}>
              ADD CAR
            </button>
          </div>
        </div>

        <div className="statProfileInst">
          <h3>Office Services:</h3>
          <ul>
            <li>You can rent the car you need</li>
            <li>We can deliver the car wherever you are</li>
            <li>We can continue to service the car</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default InfoProfile;
