import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
    ids:[]
}

const favouritesSlice = createSlice({
    name:'favourites',
    initialState,
    reducers:{
        addFavourite:(state,action) =>{
            state.ids.push(action.payload.id)
        },
        removeFavourite:(state,action) =>{
            // removes original array item by index number.
            state.ids.splice(state.ids.indexOf(action.payload.id),1);
        }
    }
});

console.log("favourites slice",favouritesSlice);

// exporting action creators / generators
export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;

// exporting a favourites reducer
export default favouritesSlice.reducer;