import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";

export const addCustomerApi = createAsyncThunk(
    "Customer/addCustomerApi",
    async (payload) => {
      await axios
        .post(`http://localhost:5000/customers`, {
          name: payload.fullname,
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
            state.customer = action.payload
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
            state.success = true;
        }
    }
});



const {reducer, actions} = userRegister;
export const {addCustomer, saveCurrentLocation} = actions;
export default reducer;