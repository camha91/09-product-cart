/* eslint-disable default-case */
const stateCart = {
  cart: [],
};

const ProductCartReducer = (state = stateCart, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      let index = state.cart.findIndex(
        (cartItem) => cartItem.productId === action.cartItem.productId
      );

      if (index !== -1) {
        state.cart[index].qty += 1;
      } else {
        state.cart.push(action.cartItem);
      }

      // Set state
      state.cart = [...state.cart];

      return { ...state };
    }
  }
  return { ...state };
};

export default ProductCartReducer;
