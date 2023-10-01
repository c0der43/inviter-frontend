import {combineReducers} from "@reduxjs/toolkit";
import {CreateEventSchema} from "@/features/CreateNewEvent/model/types";
import {createEventFieldsReducer} from "@/features/CreateNewEvent/model/slices/createEventSlice/createEventSlice.ts";
import {tagsEventReducer} from "@/features/CreateNewEvent/model/slices/tagsEventSlice/tagsEventSlice.ts";
import {createEventCuratorsReducer} from "@/features/CreateNewEvent/model/slices/curatorsEventSlice/curatorsEventSlice.ts";

export const createEventReducer = combineReducers<CreateEventSchema>({
    fields: createEventFieldsReducer,
    tags: tagsEventReducer,
    curators: createEventCuratorsReducer
});
