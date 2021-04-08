import React, { Component } from "react";
import dataPhones from "../Data/data.json";
import ProductItem from "./ProductItem";

class ProductList extends Component {
  productList = dataPhones;

  renderPhoneList = () => {
    return this.productList.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <ProductItem addToCart={this.props.addToCart} productItem={product} />
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
