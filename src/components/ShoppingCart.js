import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      {
        id: Math.floor(Math.random() * 10000),
        productName: "iPhone",
        price: 35000,
        quantity: 0,
        description: "Good",
        image:
          "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXBob25lJTIwMTF8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
      },
      {
        id: Math.floor(Math.random() * 10000),
        productName: "Samsung S21",
        price: 105000,
        quantity: 0,
        description: "Good",
        image:
          "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2Ftc3VuZyUyMHMyMXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
      },
      {
        id: Math.floor(Math.random() * 10000),
        productName: "Headphones",
        price: 1500,
        quantity: 0,
        description: "Good",
        image:
          "https://media.istockphoto.com/photos/pink-headphones-picture-id1289318271?b=1&k=20&m=1289318271&s=170667a&w=0&h=02HeJjH6cjikL0SIthX_SHVAZuxMhzTEWBNSQ0sBWTA=",
      },
      {
        id: Math.floor(Math.random() * 10000),
        productName: "HP Laptop",
        price: 21000,
        quantity: 0,
        description: "Good",
        image:
          "https://media.istockphoto.com/photos/laptop-picture-id90616136?b=1&k=20&m=90616136&s=170667a&w=0&h=3C88O8eBepFiROPkqm6yPvcjjANjLnwBP3hu3JuQ3k8=",
      },
      {
        id: Math.floor(Math.random() * 10000),
        productName: "PoweBank",
        price: 200,
        quantity: 0,
        description: "Good",
        image:
          "https://images.unsplash.com/photo-1586253634019-c77872f966f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cG93ZXJiYW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
      },
      {
        id: Math.floor(Math.random() * 10000),
        productName: "Microwave",
        price: 9500,
        quantity: 0,
        description: "Good",
        image:
          "https://media.istockphoto.com/photos/modern-microwave-oven-picture-id139406154?b=1&k=20&m=139406154&s=170667a&w=0&h=Y3lNEt5oSTvQvbwijoFIra6fEhPhntT5fdReVHwxSJs=",
      },
      {
        id: Math.floor(Math.random() * 10000),
        productName: "Mini Bluetooth Speaker",
        price: 1500,
        quantity: 0,
        description: "Good",
        image:
          "https://media.istockphoto.com/photos/portable-bluetooth-speaker-picture-id1129572489?b=1&k=20&m=1129572489&s=170667a&w=0&h=XYgU6HGlbISnLfUAALq26Z94nYjZm04F2i1Gnz0xcLw=",
      },
    ],
  };

  handeIncrement = (product, maxValue) => {
    //get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++;

      this.setState({
        products: allProducts,
      });
    }
  };

  handleDecrement = (product, minValue) => {
    //get index of the selected product
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;

      this.setState({
        products: allProducts,
      });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete ?")) {
      //delete product based on index
      allProducts.splice(index, 1);

      this.setState({
        products: allProducts,
      });
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>

        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handeIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }
}
