import React, { Component } from "react";
import { connect } from "react-redux";

class CartModal extends Component {
  getSubTotal = () => {
    return this.props.cart
      .reduce((subTotal, cartItem, index) => {
        return (subTotal += cartItem.price * cartItem.qty);
      }, 0)
      .toLocaleString();
  };
  render() {
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
                  <tbody>
                    {this.props.cart.map((product, index) => {
                      return (
                        <tr key={index}>
                          <td>{product.productId}</td>
                          <td>
                            <img
                              src={product.image}
                              alt={product.image}
                              width={50}
                              height={50}
                            />
                          </td>
                          <td>{product.productName}</td>
                          <td>${product.price.toLocaleString()}</td>
                          <td>
                            <button
                              onClick={() => {
                                this.props.changeCartItemQty(
                                  product.productId,
                                  false
                                );
                              }}
                              className="btn btn-primary"
                            >
                              -
                            </button>
                            {product.qty.toLocaleString()}
                            <button
                              onClick={() => {
                                this.props.changeCartItemQty(
                                  product.productId,
                                  true
                                );
                              }}
                              className="btn btn-primary"
                            >
                              +
                            </button>
                          </td>
                          <td>
                            ${(product.qty * product.price).toLocaleString()}
                          </td>
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
                    })}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <th>SubTotal</th>
                      <th>${this.getSubTotal()}</th>
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

// Function to turn state redux to props of component
const mapStateToProps = (state) => {
  // state is state of the app contain all chilren state (rootReducer)
  return {
    cart: state.stateCart.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeCartItem: (productId) => {
      let action = {
        type: "REMOVE_CART_ITEM",
        productId,
      };

      dispatch(action);
    },
    changeCartItemQty: (productId, changeQty) => {
      // changeQty = true => Increase --- changeQty = false => Decrease
      let action = {
        type: "CHANGE_CART_ITEM_QTY",
        productId,
        changeQty,
      };
      console.log(productId);
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
