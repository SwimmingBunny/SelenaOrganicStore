import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";

const addCustomerApi = createAsyncThunk(
    "Customer/addCustomerApi",
    async (payload) => {
      await axios
        .post(`http://localhost:5000/customers`, {
          name: payload.fullname,
          phone:'09999999',
          mail: payload.email,
          gender: 'male',
          password: payload.password,
          address: '42 abcd'
        })
        .then((res) => {
          console.log(".addTaskApi ~ res", res);
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
        listCustomer: []
    },
    reducers: {
        addUser: (state,action) => {
            state.listCustomer.push(action.payload)
        }
    },
    extraReducer:{
        [addCustomerApi.pending]: (state,action) =>{},
        [addCustomerApi.rejected]: (state,action) =>{},
        [addCustomerApi.fulfilled]: (state, action) =>{
            state.listCustomer = action.payload;
        }
    }
});



const {reducer, actions} = userRegister;
export const { addUser} = actions;
export default reducer;