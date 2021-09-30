import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";

export const addOrderApi = createAsyncThunk(
    "order/addOrderApi",
    async (payload) => {
        console.log('payload',payload);
      await axios
        .post(`http://localhost:5000/order`, {
          customer_id : payload.listId,
          total: payload.total,
          status: "Pending",
          cart : payload.cart
        })
        .then((res) => {
          // console.log(".addOrderApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
    }
  );

  export const getOrderApi = createAsyncThunk(
    "order/addOrderApi",
    async () => {
      const res = await axios
        .get(`http://localhost:5000/order`)
        .then((res) => {
          // console.log(".addOrderApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
      return res.data;
    }
  );
 
  
const orderList = createSlice({
    name: 'orderList',
    initialState: {
      listOrderApi:[]
    },
    reducers: {
    },
    
    extraReducers:{
      
        [addOrderApi.pending]: (state,action) => {
          state.loading = true;
        },
        [addOrderApi.rejected]: (state,action) =>{},
        [addOrderApi.fulfilled]: (state, action) =>{
        },
        [getOrderApi.pending]: (state,action) => {
          state.loading = true;
        },
        [getOrderApi.rejected]: (state,action) =>{},
        [getOrderApi.fulfilled]: (state, action) =>{
          state.listOrderApi = action.payload || [];
        },
    }
});



const {reducer, actions} = orderList;
export const {} = actions;
export default reducer;