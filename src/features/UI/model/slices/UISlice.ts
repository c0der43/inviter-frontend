import {UISchema} from "@/features/UI";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: UISchema = {
    sidebar: true,
    navbar: true
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        setVisibleSidebar: (state, {payload}: PayloadAction<boolean>) => {
            state.sidebar = payload;
        },
        setVisibleNavbar: (state, {payload}: PayloadAction<boolean>) => {
            state.navbar = payload;
        },
        setVisibleNavbarAndSidebar: (state, {payload}: PayloadAction<boolean>) => {
            state.navbar = payload;
            state.sidebar = payload;
        }
    }
});

export const {actions: uiActions} = uiSlice;
export const {reducer: uiReducer} = uiSlice;
