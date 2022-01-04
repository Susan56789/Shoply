import React, { Component } from "react";

export default class Home extends Component {
  state = {
    pageTitle: "Customers",
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1">{this.state.pageTitle}</h4>
      </div>
    );
  }
}
