import customerReducer from '../reducers/customerSlice'
import { configureStore } from "@reduxjs/toolkit";
import listProductReducer  from '../reducers/productSlice';

const rootReducer = {
    listCustomer: customerReducer,
    listProduct : listProductReducer,
}

const store = configureStore({
    reducer: rootReducer
});

export default store;