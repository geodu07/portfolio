import React, { Component } from "react";

class ButtonLenguague extends Component {
  handleLenguagueEN = ev => {
    let lenguague = 0;
    this.props.handleLenguague(lenguague);
  };
  handleLenguagueES = ev => {
    let lenguague = 1;
    this.props.handleLenguague(lenguague);
  };

  render() {
    return (
      <div className="col-3 col-lg-2 float-right">
        <div
          className="btn-group btn-group-sm"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            id="0"
            className="btn btn-light"
            onClick={this.handleLenguagueEN}
          >
            <small className="font-weight-lighter text-black-50">EN</small>
          </button>
          <button
            type="button"
            id="1"
            className="btn btn-light"
            onClick={this.handleLenguagueES}
          >
            <small className="font-weight-lighter text-black-50">ES</small>
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonLenguague;
