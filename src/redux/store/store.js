import registerReducer from '../reducers/userRegisterSlice'
import { configureStore } from "@reduxjs/toolkit";
import listProductReducer  from '../reducers/productSlice';

const rootReducer = {
    register: registerReducer,
    listProduct : listProductReducer
}

const store = configureStore({
    reducer: rootReducer
});

export default store;