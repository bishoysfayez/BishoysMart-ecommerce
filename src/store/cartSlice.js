import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartItems: JSON.parse(localStorage.getItem("cartItems")) && JSON.parse(localStorage.getItem("cartItems")).length > 0 ? JSON.parse(localStorage.getItem("cartItems")) : [] };

const cartSlice = createSlice({
    name: 'cartItems',
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            //check if item is already exist in cart -- added once before
            let isFound = false;

            if (state.cartItems.length > 0) {
                state.cartItems.forEach((element, index) => {
                    if (element.id === action.payload.id) {

                        isFound = true;
                    }

                })
            }

            // dealing if item id found 
            if (isFound) {
                window.alert(' item is already exist in cart')
                //state.cartItems[action.payload.id].cartQty +=1
                //localStorage.setItem("cartItems", JSON.stringify(state.cartItems));



            } else {
                action.payload.cartQty = 1;
                state.cartItems.push(action.payload);
                localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            }

            // state.cartItems.push(action.payload);
            // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            return state;

        },
        increase: (state, action) => {
            let clonedCartArray = [...state.cartItems];
            clonedCartArray.forEach((item, index) => {
                if (action.payload.id === item.id) {
                    if(item.cartQty < 12){
                        item.cartQty+= 1
                    }  
                }
            })
            state.cartItems = [...clonedCartArray]
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            return state

        },
        decrease: (state, action) => {
            let clonedCartArray = [...state.cartItems];
            clonedCartArray.forEach((item, index) => {
                if (action.payload.id === item.id) {
                    //console.log("found", index)
                    if(item.cartQty >1){
                        item.cartQty-= 1
                    }  
                }
            })
            state.cartItems = [...clonedCartArray]
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            return state

        },
        deleteItem: (state, action) => {
            let clonedCartArrayWithoutDeletedItem = state.cartItems.filter((item) => {
                if (action.payload.id !== item.id) {
                    return item

                }
            })
            state.cartItems = [...clonedCartArrayWithoutDeletedItem]
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            //console.log(state.cartItems);

            return state;

        }


    }
}


)








export const { addToCart, increase, decrease, deleteItem } = cartSlice.actions;


export default cartSlice.reducer;

