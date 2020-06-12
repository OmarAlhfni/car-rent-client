import React, { Component } from "react";
import { Link } from "react-router-dom";
import { data } from "./Component/data";
import { SubFooter } from "./Component";
import "./index.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer" >
        <div className="upFooter">
          <div className="footerStore">
            <h2 className="title">CarRent</h2>
            <p>www.carrent.com</p>
            <img src="/img/app-store-google-play.png" alt="store" />
          </div>
          {data.map((el, index) => (
            <div key={index}>
              <h4>{el.title}</h4>
              <ul className="footerUL">
                {el.items.map((el, index) => (
                  <li key={index}>
                    <Link to={el.route} className="footerLi">
                      {el.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <SubFooter />
      </div>
    );
  }
}

export default Footer;
