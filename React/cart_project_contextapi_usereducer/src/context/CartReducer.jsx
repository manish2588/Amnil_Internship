export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":  
      return { ...state, cart: [...state.cart, action.payload] };   //add to the cart array
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),  // remove from cart array
      };
    default:
      return state;
  }
};
