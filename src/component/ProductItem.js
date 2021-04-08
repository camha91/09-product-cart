import React, { Component } from "react";

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

export default ProductItem;
