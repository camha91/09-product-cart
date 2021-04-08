import React, { Component } from "react";

class CartModal extends Component {
  renderCart = () => {
    let { cartList } = this.props;
    return cartList.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.productId}</td>
          <td>
            <img
              style={{ width: "35px" }}
              src={product.image}
              alt={product.image}
            />
          </td>
          <td>{product.series}</td>
          <td>${product.price.toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.changeQty(product.productId, -1);
              }}
              className="btn btn-success"
            >
              -
            </button>
            {product.qty.toLocaleString()}
            <button
              onClick={() => {
                this.props.changeQty(product.productId, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>${(product.qty * product.price).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.removeCartItem(product.productId);
              }}
              className="btn btn-danger"
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
  };

  subTotal = () => {
    let { cartList } = this.props;
    return cartList
      .reduce((subTotal, cartItem, index) => {
        return (subTotal += cartItem.qty * cartItem.price);
      }, 0)
      .toLocaleString();
  };
  render() {
    let { cartList } = this.props;

    return (
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div
            style={{ minWidth: "1000px" }}
            className="modal-dialog"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Cart</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Product ID</th>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCart()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>SubTotal</td>
                      <td>${this.subTotal()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CartModal;
