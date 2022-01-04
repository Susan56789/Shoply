import React, { Component } from "react";
import "../App.css";

export default class Product extends Component {
  render() {
    return (
      <div className=" col-lg-3">
        <div className="card m-2" style={{ width: "18rem" }}>
          <img className="card-img-top" src={this.props.image} alt="" />
          <div className="card-body">
            <h4 className="card-title">{this.props.productName}</h4>
            <h6 className="card-subtitle mt-2 mb-2 text-muted">
              ID: {this.props.id}
            </h6>
            <h5 className="card-subtitle mb-2 text-muted">
              Ksh: {this.props.price}
            </h5>
            <p className="card-text text-muted">
              Quantity: {this.props.quantity}
            </p>
            <p className="card-text">{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
