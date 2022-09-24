import { configureStore, createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 9, name: "White and Black", count: 2 },
    { id: 10, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    increaseQuantity(state, id) {
      const target = state.find((item) => item.id === id.payload);
      target.count += 1;
    },
    decreaseQuantity(state, id) {
      const target = state.find((item) => item.id === id.payload);
      target.count -= 1;
    },
    addToCart(state, product) {
      const { id, title } = product.payload;
      const newItem = { id: id, name: title, count: 1 };
      state.push(newItem);
    },
  },
});

export const { increaseQuantity, decreaseQuantity, addToCart } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
