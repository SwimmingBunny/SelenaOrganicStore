import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";

export const addCustomerApi = createAsyncThunk(
    "Customer/addCustomerApi",
    async (payload) => {
      await axios
        .post(`http://localhost:5000/customers`, {
          id: 15,
          name: payload.fullname,
          phone:'09999999',
          mail: payload.email,
          gender: '1',
          password: payload.password,
          address: '42 abcd'
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



const userRegister = createSlice({
    name: 'register',
    initialState: {
        customer: {},
        previousLocation: '',
        success: false,
        loading: false,
    },
    reducers: {
        addCustomer: (state,action) => {
            state.listCustomer.push(action.payload)
        },
        saveCurrentLocation : (state, action) => {
          state.previousLocation = action.payload //currentLocation
        }
    },
    extraReducers:{
      
        [addCustomerApi.pending]: (state,action) => {
          state.loading = true;
        },
        [addCustomerApi.rejected]: (state,action) =>{},
        [addCustomerApi.fulfilled]: (state, action) =>{
            state.customer = action.payload;
            state.success = true;
        }
    },
    // extraReducers: (builder) => {
    //   // Add reducers for additional action types here, and handle loading state as needed
    //   builder.addCase(addCustomerApi.pending, (state, action) => {
    //     // Add user to the state array
    //     state.loading = true;
    //   })
    // },
});



const {reducer, actions} = userRegister;
export const {addCustomer, saveCurrentLocation} = actions;
export default reducer;