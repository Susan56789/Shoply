import React, { Component } from "react";
import "../App.css";

export default class Product extends Component {
  render() {
    return (
      <div className=" col-lg-3">
        <div className="card m-2" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            style={{ height: "200px" }}
            src={this.props.image}
            alt=""
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.productName}</h4>
            <h6 className="card-subtitle mt-2 mb-2 text-muted">
              ID: {this.props.id}
            </h6>
            <h5 className="card-subtitle mb-2 text-muted">
              Ksh: {this.props.price}
            </h5>
            <p className="card-text">{this.props.description}</p>
          </div>
          {/**card body ends here */}

          <div className="card-footer">
            <div className="float-start">
              <span className="badge badge-secondary bg-black m-2">
                {this.props.quantity}
              </span>
              <div className="btn-group">
                <button className="btn btn-outline-success m-2">+</button>
                <button className="btn btn-outline-success m-2">-</button>
              </div>
            </div>
            <div className="float-end">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
