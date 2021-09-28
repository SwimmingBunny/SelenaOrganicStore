import customerReducer from '../reducers/customerSlice'
import { configureStore } from "@reduxjs/toolkit";
import listProductReducer  from '../reducers/productSlice';
import listCommentReducer  from '../reducers/commentSlice';

const rootReducer = {
    listCustomer: customerReducer,
    listProduct : listProductReducer,
    listComment : listCommentReducer,
}

const store = configureStore({
    reducer: rootReducer
});

export default store;