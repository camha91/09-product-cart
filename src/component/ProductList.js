import React, { Component } from "react";
import dataPhones from "../Data/data.json";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  productList = dataPhones;

  state = {
    currentPhone: {
      id: 1,
      series: "Samsung Galaxy S21",
      screenSize: "6.2 inches",
      operatingSystem: "Android 11",
      frontCamera: "10 MP",
      rearCamera: "12 MP",
      ram: "8 GB",
      internalMemory: "128 GB",
      price: 649.99,
      image: "./img/phone_samsungS21.png",
    },
  };

  renderPhoneList = () => {
    return this.productList.map((phone, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem productItem={phone} />
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">{this.renderPhoneList()}</div>
      </div>
    );
  }
}

export default ProductList;
