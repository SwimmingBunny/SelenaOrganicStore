import registerReducer from '../reducers/userRegisterSlice'
import { configureStore } from "@reduxjs/toolkit";
import listproductReducer  from '../reducers/productSlice';

const rootReducer = {
    register: registerReducer,
    listProduct : listproductReducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;