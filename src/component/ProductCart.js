import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";

class ProductCart extends Component {
  state = {
    cart: [],
  };

  removeCartItem = (productId) => {
    let index = this.state.cart.findIndex(
      (cartItem) => cartItem.productId === productId
    );

    if (index !== -1) {
      this.state.cart.splice(index, 1);
    }

    this.setState({
      cart: this.state.cart,
    });
  };

  totalCartItem = () => {
    let cart = [...this.state.cart];
    return cart
      .reduce((totalCartItem, product, index) => {
        return (totalCartItem += product.qty);
      }, 0)
      .toLocaleString();
  };

  changeQty = (productId, number) => {
    let cart = [...this.state.cart];
    let index = cart.findIndex((cartItem) => cartItem.productId === productId);

    if (index !== -1) {
      if (cart[index].qty <= 1 && number === -1) {
        alert("Quantity at least is 1!");
        return;
      }
      cart[index].qty += number;
    }

    this.setState({
      cart: cart,
    });
  };

  addToCart = (product) => {
    let cart = [...this.state.cart];
    let productItem = {
      productId: product.productId,
      image: product.image,
      series: product.series,
      price: product.price,
      qty: 1,
    };

    // Find item if it's already exist in cart
    let index = this.state.cart.findIndex(
      (cartItem) => cartItem.productId === productItem.productId
    );
    console.log(index);

    if (index !== -1) {
      // The product that is clicked found in cart, increase the qty
      cart[index].qty += 1;
    } else {
      // The product is not found in cart, add to cart
      cart.push(productItem);
    }

    this.setState({
      cart: cart,
    });
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
              <i className="fa fa-cart-arrow-down"></i>({this.totalCartItem()})
              Cart
            </i>
          </span>
        </div>

        <CartModal
          changeQty={this.changeQty}
          removeCartItem={this.removeCartItem}
          cartList={this.state.cart}
        />
        <ProductList addToCart={this.addToCart} />
      </div>
    );
  }
}

export default ProductCart;
