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
    listProductApi: [{
      id: 1,
      name: 'carrot',
      img: 'https://picsum.photos/200/300',
      price: '12',
      sell: '123'
    },{
      id: 2,
      name: 'barrot',
      img: 'https://picsum.photos/200/300',
      price: '12',
      sell: '123'
    },{
      id: 3,
      name: 'darrot',
      img: 'https://picsum.photos/200/300',
      price: '12',
      sell: '123'
    },{
      id: 4,
      name: 'kt',
      img: 'https://picsum.photos/200/300',
      price: '12',
      sell: '123'
    }],
    sortBy: "Name"
  },
  reducers: {
    getProduct: async (state, action) => {},
    setSortName: (state,action)=>{
      state.sortBy = action.payload;
      state.listProductApi= [...state.listProductApi].sort((a, b) => {
        if ((action.payload === "Name")) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
        }
        if (action.payload  === "Rating") {
          return a.rate - b.rate
        }
      });
    }
  },
  extraReducers: {
    [getListProductApi.pending]: (state, action) => {
    },
    [getListProductApi.rejected]: (state, action) => {},
    [getListProductApi.fulfilled]: (state, action) => {
      state.listProductApi = action.payload|| [];
      console.log("🚀 ~ file: productSlice.js ~ line 55 ~ action.payload", action.payload)
    },
  },
});

const { reducer, actions } = listProduct;
export const { getProduct,setSortName } = actions;
export default reducer;
