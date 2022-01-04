import React, { Component } from "react";

export default class Home extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Jane Mumbi",
        phone: "0709775241",
        address: { city: "Mombasa", county: "Mombasa" },
        photo: "https://picsum.photos/id/1067/60",
      },
      {
        id: 2,
        name: "John Kamau",
        phone: "0729435241",
        address: { city: "Nakuru", county: "Nakuru" },
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 3,
        name: "Alex Opiyo",
        address: { city: "Nairobi", county: "Nairobi" },
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 4,
        name: "Mary Atieno",
        phone: "0721235241",
        address: { city: "Kisumu", county: "Kisumu" },
        photo: "https://picsum.photos/id/1023/60",
      },
      {
        id: 5,
        name: "Mark Wafula",
        phone: "0732665241",
        address: { city: "Bungoma", county: "Bungoma" },
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 6,
        name: "Stella Mwanza",
        phone: "0742655241",
        address: { city: "Nanyuki", county: "Laikipia" },
        photo: "https://picsum.photos/id/1015/60",
      },
    ],
  };

  //executes when user click on Refresh button
  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  getPhoneToRender = (phone) => {
    if (phone) {
      return phone;
    } else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  //executes when the user click on "Chang Picture" button in the grid
  //Receives the "customer" object and index of the currently clicked customer
  onChangePictureClick = (cust, index) => {
    //get existing customers
    var custArr = this.state.customers;
    let id = Math.floor(Math.random() * 1070);
    custArr[index].photo = `https://picsum.photos/id/${id}/60`;

    //update "customers" array in the state
    this.setState({ customers: custArr });
  };

  getCustomerRow = () => {
    return this.state.customers.map((cust, index) => {
      return (
        <tr key={cust.id}>
          <td>{cust.id}</td>
          <td>
            <img className="user-img" src={cust.photo} alt="user-profile" />
            <div>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => {
                  this.onChangePictureClick(cust, index);
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
          <td>{cust.name}</td>
          <td>{this.getPhoneToRender(cust.phone)}</td>
          <td>{cust.address.city}</td>
          <td>{cust.address.county}</td>
        </tr>
      );
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
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>County</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
}
