import React, { Component } from "react";

export default class Home extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      { id: 1, name: "Jane Mumbi", phone: "0709775241" },
      { id: 2, name: "John Kamau", phone: "0729435241" },
      { id: 3, name: "Alex Opiyo", phone: "0791215241" },
      { id: 4, name: "Mary Atieno", phone: "0721235241" },
      { id: 5, name: "Mark Wafula", phone: "0732665241" },
      { id: 6, name: "Stella Mwanza", phone: "0742655241" },
    ],
  };

  //executes when user click on Refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  render() {
    return (
      <div>
        <h4 className="border-bottom m-1 p-1 ">
          {this.state.pageTitle}
          <span className="badge badge-secondary m-2 bg-black">
            {this.state.customersCount}
          </span>

          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
