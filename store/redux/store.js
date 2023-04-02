import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "./features/favouritesSlice";

export const store = configureStore({
    reducer:{
        favouriteMeals:favouritesReducer
    }
});

console.log("storee ----->>>>",store);