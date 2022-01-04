import React, { Component } from "react";
import "../App.css";

export default class Product extends Component {
  state = {
    product: this.props.product,
  };

  render() {
    return (
      <div className=" col-lg-3">
        <div className="card m-2" style={{ width: "20rem" }}>
          <img
            className="card-img-top"
            style={{ height: "200px" }}
            src={this.state.product.image}
            alt=""
          />
          <div className="card-body">
            <h6 className="card-subtitle mt-2 mb-2 text-muted">
              ID: {this.state.product.id}
              <span
                className="pull-right hand-icon"
                onClick={() => {
                  this.props.onDelete(this.state.product);
                }}
              >
                <i className="fa fa-times"></i>
              </span>
            </h6>
            <h4 className="card-title">{this.props.productName}</h4>
            <h5 className="card-subtitle mb-2 text-muted">
              Ksh: {this.state.product.price}
            </h5>
            <p className="card-text">{this.state.product.description}</p>
          </div>
          {/**card body ends here */}

          <div className="card-footer">
            <div className="float-start">
              <span className="badge badge-secondary bg-black m-2">
                {this.state.product.quantity}
              </span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success m-2"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success m-2"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <div className="float-end">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }
}
