import React, { Component } from "react";
import Switch from "react-switch";
import './widget/switch.css'

class SwitchJob extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
<label htmlFor="icon-switch" >
   <Switch
    checked={this.state.checked}
    onChange={this.handleChange}
    offColor="#343a40"
    onColor="#f8f9fa"
    offHandleColor="#f8f9fa"
    onHandleColor="#343a40"
    className='react-switch'
    width={70}
    // height={20}
    uncheckedIcon={
      <div className='DEV'
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 10,
          color: "#f8f9fa",
          paddingRight: 1,
          width: 8
        }}
      >
        
      </div>
    }
    checkedIcon={
      <div className='ING'
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        fontSize: 10,
        color: "dark",
        paddingRight: 2,
        width: 77
      }}
    >
      
    </div>
    }

  />
</label>
    );
  }
}

export default SwitchJob