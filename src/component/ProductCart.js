import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductList from "./ProductList";

class ProductCart extends Component {
  state = {
    cart: [],
  };

  removeCartItem = (id) => {
    let index = this.state.cart.findIndex((cartItem) => cartItem.id === id);

    if (index !== -1) {
      this.state.cart.splice(index, 1);
    }

    this.setState({
      cart: this.state.cart,
    });
  };

  totalPrice = () => {
    return this.state.cart
      .reduce((totalPrice, product, index) => {
        return (totalPrice += product.qty);
      }, 0)
      .toLocaleString();
  };

  addToCart = (product) => {
    console.log(product);
    let productItem = {
      id: product.id,
      image: product.image,
      series: product.series,
      price: product.price.toLocaleString(),
      qty: 1,
    };

    // Find item if it's already exist in cart
    let index = this.state.cart.findIndex(
      (cartItem) => cartItem.id === productItem.id
    );
    console.log(index);

    if (index !== -1) {
      // The product that is clicked found in cart, increase the qty
      this.state.cart[index].qty += 1;
    } else {
      // The product is not found in cart, add to cart
      this.state.cart.push(productItem);
    }

    this.setState({
      cart: this.state.cart,
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
              <i className="fa fa-cart-arrow-down"></i>({this.totalPrice()})
              Cart
            </i>
          </span>
        </div>

        <CartModal
          removeCartItem={this.removeCartItem}
          cartList={this.state.cart}
        />
        <ProductList addToCart={this.addToCart} />
      </div>
    );
  }
}

export default ProductCart;
