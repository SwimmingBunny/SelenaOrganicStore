import customerReducer from '../reducers/customerSlice'
import { configureStore } from "@reduxjs/toolkit";
import listProductReducer  from '../reducers/productSlice';
import listCoupon from '../reducers/couponSlice'

const rootReducer = {
    listCustomer: customerReducer,
    listProduct : listProductReducer,
    coupon : listCoupon,
}

const store = configureStore({
    reducer: rootReducer
});

export default store;