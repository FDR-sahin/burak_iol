import { createSlice } from "@reduxjs/toolkit";
import productsData from "../../data/products";

const initialState = {
  items: productsData,
  status: "idle",
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectAllProducts = (state) => state.products.items;
export const selectProductById = (state, productId) =>
  state.products.items.find((p) => p.id === productId);

export default productsSlice.reducer;
