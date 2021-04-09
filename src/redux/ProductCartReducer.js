const stateCart = {
  cart: [
    {
      productId: 1,
      image: "",
      series: "Galaxy S21",
      price: 649.99,
      qty: 1,
    },
  ],
};

const ProductCartReducer = (state = stateCart, action) => {
  return { ...state };
};

export default ProductCartReducer;
