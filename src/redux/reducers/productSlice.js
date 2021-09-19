/** @format */

import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getListProductApi = createAsyncThunk(
  "product/getApiData",
  async () => {
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
    listProductInit: [],
    cart: [],
    sortName: "Name",
    sortPrice: 1,
    filterType: null,
  },
  reducers: {
    getProduct: async (state, action) => {},
    setSortName: (state, action) => {
      state.sortName = action.payload;
      state.listProductApi = [...state.listProductInit].sort((a, b) => {
        if (action.payload === "Name") {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        }
      });
    },
    setSortItem: (state, action) => {
      state.sortPrice = action.payload;
      state.listProductApi = [...state.listProductInit].filter(
        (item, index) => {
          if (action.payload === 1) {
            return item.price < 10 && item.price > 1;
          }
          if (action.payload === 2) {
            return item.price < 50 && item.price > 10;
          }
          if (action.payload === 3) {
            return item.price > 100;
          }
        }
      );
    },
    filterType: (state, action) => {
      state.filterType = action.payload;
      console.log(
        "🚀 ~ file: productSlice.js ~ line 64 ~ action.payload",
        action.payload
      );
      state.listProductApi = [...state.listProductInit].filter(
        (item, index) => {
          const id = action.payload.key;
          switch (id) {
            case "1":
              return item.type === "vegetables";
            case "11":
              return item.type === "fruits";

            case "8":
              return item.type === "juice";
            case "5":
              return item.type === "meats";
            default:
              return true;
          }
        }
      );
    },
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload];
    },
    delete: (state, action) => {
      state.cart = state.cart.filter((item) => action.payload !== item.id);
    },
    editCartItem: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (action.payload.id !== item.id) {
          return action.payload;
        }
        return item;
      });
    },
  },
  extraReducers: {
    [getListProductApi.pending]: (state, action) => {},
    [getListProductApi.rejected]: (state, action) => {},
    [getListProductApi.fulfilled]: (state, action) => {
      state.listProductApi = action.payload || [];
      state.listProductInit = action.payload || [];
      console.log(
        "🚀 ~ file: productSlice.js ~ line 55 ~ action.payload",
        action.payload
      );
    },
  },
});

const { reducer, actions } = listProduct;
export const { getProduct, setSortName, setSortItem, filterType, addToCart } =
  actions;
export default reducer;
