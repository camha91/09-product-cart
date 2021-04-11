import React, { Component } from "react";
import { connect } from "react-redux";

class ProductItem extends Component {
  render() {
    let { productItem } = this.props;
    return (
      <div className="card text-left text-center">
        <img
          style={{ width: "200px", height: "250px", marginLeft: "90px" }}
          className="card-img-top"
          src={productItem.image}
          alt={productItem.image}
        />
        <div className="card-body">
          <h4 className="card-title">{productItem.series}</h4>
          <p className="card-text">${productItem.price}</p>
          <button
            onClick={() => {
              this.props.addToCart(productItem);
            }}
            className="btn btn-success"
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}

// Function to send data to store
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => {
      // Create cartItem
      const cartItem = {
        productId: product.productId,
        image: product.image,
        series: product.image,
        price: product.price,
        qty: 1,
      };
      // console.log("cartItem", cartItem);
      // Create action
      let action = {
        type: "ADD_TO_CART", // Require variable of action
        cartItem,
      };

      dispatch(action);
    },
  };
};

// null b/c no data was taken from store
export default connect(null, mapDispatchToProps)(ProductItem);
