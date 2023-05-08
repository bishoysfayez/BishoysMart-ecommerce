import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import searchKeywordReducer from "./searchKeywordSlice.js";
import wishListReducer from "./wishListSlice.js";

const store = configureStore({
    reducer: {
        searchKeyword: searchKeywordReducer,
        cartItems: cartReducer,
        wishListItems : wishListReducer
    }
});

export default store;

