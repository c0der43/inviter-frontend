import {CommentFormSchema} from "@/features/CommentForm";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: CommentFormSchema = {
    text: ''
}

export const commentFormSlice = createSlice({
   name: 'commentForm',
   initialState,
   reducers: {
       setText: (state, {payload}: PayloadAction<string>) => {
           state.text = payload;
       }
   }
});

export const {
    actions: commentFormActions,
    reducer: commentFormReducer
} = commentFormSlice;
