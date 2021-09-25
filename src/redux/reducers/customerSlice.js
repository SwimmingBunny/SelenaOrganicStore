import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";

export const addCustomerApi = createAsyncThunk(
    "Customer/addCustomerApi",
    async (payload) => {
      await axios
        .post(`http://localhost:5000/customers`, {
          username: payload.fullname,
          mail: payload.email,
          password: payload.password,
        })
        .then((res) => {
          console.log(".addCustomerApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
    }
  );
  export const getListCustomerApi = createAsyncThunk(
    "Customer/getCustomerApi",
    async (id) => {
      const res = await axios
        .get(`http://localhost:5000/customers`)
        .then((res) => {
          // console.log(".listProductApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
      return res.data;
    }
  );
  export const deleteListCustomerApi = createAsyncThunk(
    "Customer/deleteCustomerApi",
    async (id) => {
      const res = await axios
        .delete(`http://localhost:5000/customers/${id}`)
        .then((res) => {
          // console.log(".listProductApi ~ res", res);
          return res;
        })
        .catch((e) => {
          console.log("e", e);
        });
      return res.data;
    }
  );

const userRegister = createSlice({
    name: 'listCustomer',
    initialState: {
        listCustomerApi: [],
        customer: {},
        previousLocation: '',
        success: false,
        loading: false,
    },
    reducers: {
        addCustomer: (state,action) => {
            state.customer = action.payload
        },
        saveCurrentLocation : (state, action) => {
          state.previousLocation = action.payload //currentLocation
        },
    },
    
    extraReducers:{
      
        [addCustomerApi.pending]: (state,action) => {
          state.loading = true;
        },
        [addCustomerApi.rejected]: (state,action) =>{},
        [addCustomerApi.fulfilled]: (state, action) =>{
            state.success = true;
        },
        [getListCustomerApi.pending]:(state,action) => {
          state.loading = true;
        },
        [getListCustomerApi.rejected]: (state,action) =>{},
        [getListCustomerApi.fulfilled]: (state, action) =>{
            state.listCustomerApi = action.payload || []
        },
        [deleteListCustomerApi.pending]:(state,action) => {
          state.loading = true;
        },
        
    }
});



const {reducer, actions} = userRegister;
export const { addUser} = actions;
export const {addCustomer, saveCurrentLocation,deleteUser} = actions;
export default reducer;