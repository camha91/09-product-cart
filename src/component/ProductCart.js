import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";
import { connect } from "react-redux";

class ProductCart extends Component {
  renderTotalCartItem = () => {
    return this.props.cart.reduce((totalCartItem, cartItem, index) => {
      return (totalCartItem += cartItem.qty);
    }, 0);
  };
  render() {
    return (
      <div>
        <h4 className="display-4 text-center">Product List</h4>
        <div className="text-right">
          <span
            style={{ width: "17px", cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            <i className="fa fa-cart">
              <i className="fa fa-cart-arrow-down"></i>(
              {this.renderTotalCartItem()}) Cart
            </i>
          </span>
        </div>

        <CartModal />
        <ProductList />
      </div>
    );
  }
}

// Get state from redux store to become props of component
const mapStateToProps = (state) => {
  return {
    cart: state.stateCart.cart,
  };
};

export default connect(mapStateToProps)(ProductCart);
