/** @format */

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getListProductApi = createAsyncThunk(
  "product/getApiData",
  async (filtersearch) => {
    console.log(
      "🚀 ~ file: productSlice.js ~ line 7 ~ getListProductApi ~ filtersearch",
      filtersearch
    );
    const res = await axios
      .get(`http://localhost:5000/products/search?KeySearch`)
      .then((res) => {
        console.log(".listProductApi ~ res", res);
        return res;
      })
      .catch((e) => {
        console.log("e", e);
      });
    return res.data;
  }
);
const listProduct = createSlice({
  name: "listProduct",
  initialState: {
    listProductApi: [],
  },
  reducers: {
    getProduct: async (state, action) => {},
  },
  extraReducers: {
    [getListProductApi.pending]: (state, action) => {
    },
    [getListProductApi.rejected]: (state, action) => {},
    [getListProductApi.fulfilled]: (state, action) => {
      state.listProductApi = action.payload;
    },
  },
});

const { reducer, actions } = listProduct;
export const { getProduct } = actions;
export default reducer;
