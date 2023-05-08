import { createSlice } from "@reduxjs/toolkit";



const initialState = { searchKeyword: ""};

const searchKeywordSlice = createSlice({
    name: 'serchKeyword',
    initialState: initialState,
    reducers: {
        changeSearchTerm: (state, action) => { 
            state.searchKeyword = action.payload
            return state;
        },
    }

})


export const {changeSearchTerm} = searchKeywordSlice.actions;


export default searchKeywordSlice.reducer;

