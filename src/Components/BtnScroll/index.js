import React, { Component } from "react";
import classNames from "classnames";
import "./index.css";

class BtnScroll extends Component {
  state = {
    show: false,
    hidden: false
  };

  toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  toDown() {
    // document.body.scrollTop = 660;
    document.documentElement.scrollTop = 660;
    this.setState({ hidden: true });
  }

  render() {
    window.onscroll = () => {
      if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop > 600
      ) {
        this.setState({ show: true });
      } else if (
        document.body.scrollTop > 600 ||
        document.documentElement.scrollTop < 600
      ) {
        this.setState({ show: false });
      }

      if (document.documentElement.scrollTop > 50) {
        this.setState({ hidden: true });
      } else if (document.documentElement.scrollTop < 50) {
        this.setState({ hidden: false });
      }
    };

    // console.log({ test: this.state.test });

    return (
      <div>
        <div
          onClick={() => this.toTop()}
          className={classNames("BtnUps", {
            show: this.state.show
          })}
        >
          <i className="fas fa-arrow-circle-up fa-3x" />
        </div>

        <div
          onClick={() => this.toDown()}
          className={classNames("btnDown", {
            hidden: this.state.hidden
          })}
        >
          <i className="fas fa-angle-double-down fa-2x"></i>
        </div>
      </div>
    );
  }
}

export default BtnScroll;
