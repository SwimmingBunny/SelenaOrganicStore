/** @format */

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";


const listProduct = createSlice({
  name: "cartListItem",
  initialState: {
    cartListItem: [],
  },
  reducers: {
    addProduct: (state, action) => {
    },
   
  },
  extraReducers: {
  
  },
});

const { reducer, actions } = listProduct;
export const { addProduct } = actions;
export default reducer;
