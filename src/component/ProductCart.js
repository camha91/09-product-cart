import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";

class ProductCart extends Component {
  render() {
    return (
      <div>
        <h4 className="display-4 text-center">Product List</h4>
        <div className="text-right">
          <span data-toggle="modal" data-target="#modelId">
            <i className="fa fa-cart">
              <i class="fa fa-cart-arrow-down"></i>(0) Cart
            </i>
          </span>
        </div>

        <CartModal />
        <ProductList />
      </div>
    );
  }
}

export default ProductCart;
