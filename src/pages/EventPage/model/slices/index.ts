import {combineReducers} from "@reduxjs/toolkit";
import {EventPageSchema} from "@/pages/EventPage/model/types/eventPageSchema.ts";
import {eventPageEventReducer} from "@/pages/EventPage/model/slices/eventPageSlice.ts";
import {eventPageCommentsReducer} from "@/pages/EventPage/model/slices/eventPageCommentsSlice.ts";

export const eventPageReducer = combineReducers<EventPageSchema>({
    event: eventPageEventReducer,
    comments: eventPageCommentsReducer
})
