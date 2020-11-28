import React, { Component, Fragment } from "react";
import "./me.css";
import Container from "../components/container";
import ButtonGroup from "../buttonGroup";
import Profession from "../components/profession";
import Headers from "../components/header";
import { connect } from "react-redux";

import Footer from "./footer";

class Me extends Component {
  // state={
  //   profession: this.props.data.EN[0],
  //   theme: "navbar-light bg-white"
  // }

  handleProfession = (idProfession) => {
    switch (idProfession) {
      case 0:
        this.props.dispatch({
          type: "ENG",
          payload: {
            theme: "navbar-light bg-white",
            professionId: 0,
          },
        });

        break;
      case 1:
        this.props.dispatch({
          type: "DEV",
          payload: {
            theme: "navbar-dark bg-dark",
            professionId: 1,
          },
        });

        break;
    }
  };

  handleLenguague = (lenguague) => {
    switch (lenguague) {
      case 0:
        this.props.dispatch({
          type: "EN",
        });

        break;
      case 1:
        this.props.dispatch({
          type: "ES",
        });

        break;
    }
  };

  render() {
    console.log("imprimiendo props");
    console.log(this.props);
    return (
      <Fragment>
        <Headers />
        <Container>
          <ButtonGroup handleProfession={this.handleProfession} />
          <Profession profession={this.props.profession} />
        </Container>
        <Footer handleLenguague={this.handleLenguague} />
      </Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    profession: state.load.profession[state.career.role],
  };
}
export default connect(mapStateToProps)(Me);
