import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IEvent} from "@/entities/Event";
import {MyEventsPageSchema} from "@/pages/MyEventsPage/model/types/myEventsPageSchema.ts";
import {fetchGetMyEvents} from "@/pages/MyEventsPage/model/services/fetchGetMyEvents/fetchGetMyEvents.ts";

const myEventPageAdapter = createEntityAdapter<IEvent>({
    selectId: (event) => event.id
});

const eventPageSlice = createSlice({
    name: 'MyEventPageSlice',
    initialState: myEventPageAdapter.getInitialState<MyEventsPageSchema>({
        isLoading: false,
        entities: {},
        ids: []
    }),
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchGetMyEvents.fulfilled, (state, action: PayloadAction<IEvent[]>) => {
            myEventPageAdapter.setAll(state, action);
        })
    }
});

export const {
    reducer: MyEventsPageReducer
} = eventPageSlice;
