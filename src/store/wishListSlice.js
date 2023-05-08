import { createSlice } from "@reduxjs/toolkit";

const initialState = { wishListItems: JSON.parse(localStorage.getItem("wishListItems")) && JSON.parse(localStorage.getItem("wishListItems")).length > 0 ? JSON.parse(localStorage.getItem("wishListItems")) : [] };

const wishListSlice = createSlice({
    name: 'wishListItems',
    initialState: initialState,
    reducers: {
        toggleWishList: (state, action) => {
            //check if item is already exist in wish List -- added once before
            let isFound = false;
            if (state.wishListItems.length > 0) {
                state.wishListItems.forEach((element, index) => {
                    if (element.id === action.payload.id) {

                        isFound = true;
                    }

                })
            }

            // dealing if item id not found  
            if (!isFound) {
                action.payload.isWishListed = false;
                state.wishListItems.push(action.payload);
                localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
            // dealing if item id found  
              

            } else {
                //action.payload.isWishListed = true;
                state.wishListItems = state.wishListItems.filter((item) => item.id !== action.payload.id);
                localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
                
            }

            return state;

        },
        deleteFromWishList : (state, action)=>{
            state.wishListItems = state.wishListItems.filter((item) => item.id !== action.payload.id);
            localStorage.setItem("wishListItems", JSON.stringify(state.wishListItems));
            return state;
        }


    }
}


)




export const { toggleWishList, deleteFromWishList } = wishListSlice.actions;


export default wishListSlice.reducer;

