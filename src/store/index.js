import { combineReducers, configureStore } from "@reduxjs/toolkit"
import { bookSlice } from "./books";
import { cartSlice } from "./cart";
import { categorySlice } from "./categorys";
import { reviewSlice } from "./reviews";

export const store = configureStore({
    reducer: combineReducers({
        category: categorySlice.reducer,
        book: bookSlice.reducer,
        cart: cartSlice.reducer,
        review: reviewSlice.reducer,
    }),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
