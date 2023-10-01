import {CreateEventFieldsSchema} from "@/features/CreateNewEvent";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Coordinates} from "@/shared/types/coordinates.ts";
import {fetchSaveEvent} from "@/features/CreateNewEvent/model/services/fetchSaveEvent/fetchSaveEvent.ts";

const initialState: CreateEventFieldsSchema = {
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventDurationTime: '',
    eventDescription: '',
    eventLocationName: '',
    eventChoiceLocation: {lat: 0, lng: 0},
    isLoading: false
};

export const createEventSlice = createSlice({
   name: 'create event',
   initialState,
   reducers: {
       setEventName: (state, {payload} :PayloadAction<string>) => {
           state.eventName = payload;
       },
       setEventDate: (state, {payload}: PayloadAction<string>) => {
           state.eventDate = payload;
       } ,
       setEventTime: (state, {payload}: PayloadAction<string>) => {
           state.eventTime = payload;
       },
       setEventDurationTime: (state, {payload}: PayloadAction<string>) => {
           state.eventDurationTime = payload;
       },
       setEventDescription: (state, {payload}: PayloadAction<string>) => {
           state.eventDescription = payload;
       },
       setEventLocationName: (state, {payload}: PayloadAction<string>) => {
           state.eventLocationName = payload;
       },

       setEventChoiceLocation: (state, {payload}: PayloadAction<Coordinates>) => {
           state.eventChoiceLocation = payload;
       }
   },
    extraReducers: (builder) => {
       builder.addCase(fetchSaveEvent.pending, (state) => {
           state.isLoading = true;
       })
        builder.addCase(fetchSaveEvent.fulfilled, (state) => {
            state.isLoading = false;
        })
       builder.addCase(fetchSaveEvent.rejected, (state, {payload}: PayloadAction<unknown>) => {
           alert(payload);
           state.isLoading = false;
       })
    }
});

export const {
    reducer: createEventFieldsReducer,
    actions: createEventFieldsActions
} = createEventSlice;
