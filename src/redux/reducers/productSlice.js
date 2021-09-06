import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";


export const listProductApi = createAsyncThunk('product/getApiData', async () => {
    const res = await axios
      .get(`http://localhost:5000/products/search`)
      .then((res) => {
        console.log('.listProductApi ~ res', res);
        return res;
      })
      .catch((e) => {
        console.log('e', e);
      });
    return res.data;
  });
const listProduct = createSlice({
    name: 'listproduct',
    initialState: {
        listProductApi: []
    },
    reducers: {
        getProduct: async(state,action) => {
            state.listProductApi = action.payload;
        }
    },
    extraReducer:{
        [listProductApi.pending]: (state,action) =>{},
        [listProductApi.rejected]: (state,action) =>{},
        [listProductApi.fulfilled]: (state, action) =>{
            state.listProductApi = action.payload;
        }
    }
});

const {reducer, actions} = listProduct;
export const {getProduct} = actions;
export default reducer;