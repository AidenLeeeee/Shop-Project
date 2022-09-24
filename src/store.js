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
      const idx = state.findIndex((item) => item.id === id);
      if (idx === -1) {
        const newItem = { id: id, name: title, count: 1 };
        state.push(newItem);
      } else {
        state[idx].count += 1;
      }
    },
    deleteCart(state, id) {
      const idx = state.findIndex((item) => item.id === id.payload);
      state.splice(idx, 1);
    },
  },
});

export const { increaseQuantity, decreaseQuantity, addToCart, deleteCart } =
  cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
