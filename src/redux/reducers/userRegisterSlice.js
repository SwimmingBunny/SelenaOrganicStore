import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";

export const addCustomerApi = createAsyncThunk(
    "Customer/addCustomerApi",
    async (payload) => {
      await axios
        .post(`http://localhost:5000/customer`, {
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
  export const loginUser = createAsyncThunk(
    'users/login',
    async ({ email, password }, thunkAPI) => {
      try {
        const response = await fetch(
          'http://localhost:5000/customer/authenticate',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email,
              password,
            }),
          }
        );
        let data = await response.json();
        console.log('response', data);
        if (response.status === 200) {
          localStorage.setItem('token', data.token);
          return data;
        } else {
          return thunkAPI.rejectWithValue(data);
        }
      } catch (e) {
        console.log('Error', e.response.data);
        thunkAPI.rejectWithValue(e.response.data);
      }
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
export const { addUser} = actions;
export const {addCustomer, saveCurrentLocation} = actions;
export default reducer;