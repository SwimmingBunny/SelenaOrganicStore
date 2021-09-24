import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {createAsyncThunk } from "@reduxjs/toolkit";

// export const addCustomerApi = createAsyncThunk(
//     "Customer/addCustomerApi",
//     async (payload) => {
//       await axios
//         .post(`http://localhost:5000/customers`, {
//           username: payload.fullname,
//           mail: payload.email,
//           password: payload.password,
//         })
//         .then((res) => {
//           console.log(".addCustomerApi ~ res", res);
//           return res;
//         })
//         .catch((e) => {
//           console.log("e", e);
//         });
//     }
//   );
//   export const getListCustomerApi = createAsyncThunk(
//     "Customer/getCustomerApi",
//     async (id) => {
//       const res = await axios
//         .get(`http://localhost:5000/customers`)
//         .then((res) => {
//           // console.log(".listProductApi ~ res", res);
//           return res;
//         })
//         .catch((e) => {
//           console.log("e", e);
//         });
//       return res.data;
//     }
//   );
//   export const deleteListCustomerApi = createAsyncThunk(
//     "Customer/deleteCustomerApi",
//     async (id) => {
//       const res = await axios
//         .delete(`http://localhost:5000/customers/${id}`)
//         .then((res) => {
//           // console.log(".listProductApi ~ res", res);
//           return res;
//         })
//         .catch((e) => {
//           console.log("e", e);
//         });
//       return res.data;
//     }
//   );

const coupon = createSlice({
    name: 'coupon',
    initialState: {
        listCouponCode:[
            {code:"ABC"}
        ],
        couponCode: null,
        discountPrice: null
    },
    reducers: {
        addCoupon:(state,action)=>{
            state.couponCode = action.payload;
            state.discountPrice = [...state.listCouponCode].filter((item)=>{
                let vlCode = action.payload;
                if(vlCode === item.code){
                    return 2
                }
                else{
                    alert("coupon khong ton tai1")
                }
            })
        }
    },
    
    extraReducers:{
        
    }
});



const {reducer, actions} = coupon;
export const {addCoupon} = actions;
export default reducer;