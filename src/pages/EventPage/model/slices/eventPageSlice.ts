import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchGetEventById, IEvent} from "@/entities/Event";
import {EventPageDataSchema} from "@/pages/EventPage/model/types/eventPageDataSchema.ts";

const initialState: EventPageDataSchema = {
    isLoading: false,
    event: undefined
}

export const eventPageSlice = createSlice({
    name: 'eventPageSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchGetEventById.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchGetEventById.fulfilled, (state, {payload}: PayloadAction<IEvent>) => {
            state.isLoading = false;
            state.event = payload;
        })
        builder.addCase(fetchGetEventById.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const {
    reducer: eventPageEventReducer
} = eventPageSlice;
