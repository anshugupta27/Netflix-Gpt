import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        lang: "en"
    },
    reducers: {
        changesLanguage: (state, action) => {
            state.lang = action.payload;
        }
    }
})

export const {changesLanguage} = configSlice.actions;
export default configSlice.reducer;