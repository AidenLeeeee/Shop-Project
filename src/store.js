import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "Lee", age: 26 },
  reducers: {
    changeName(state) {
      state.name = "Aiden";
    },
    changeAge(state, a) {
      state.age += a.payload;
    },
  },
});

export let { changeName, changeAge } = user.actions;

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {},
});

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});