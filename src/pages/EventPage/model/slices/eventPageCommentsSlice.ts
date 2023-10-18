import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Comment} from "@/entities/Comment/model/types/Comment.ts";
import {EventPageCommentsSchema} from "@/pages/EventPage/model/types/eventPageCommentsSchema.ts";
import {
    fetchGetCommentsByEventId
} from "@/pages/EventPage/model/services/fetchGetCommentsByEventId/fetchGetCommentsByEventId.ts";
import {StateSchema} from "@/app/providers/StoreProvider";
import {
    fetchDeleteMyCommentById
} from "@/pages/EventPage/model/services/fetchDeleteMyCommentById/fetchDeleteMyCommentById.ts";

const commentsAdapter = createEntityAdapter<Comment>({
    selectId: (comment) => comment.id
});

export const getEventCommentsSelector = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.eventPage?.comments || commentsAdapter.getInitialState()
);

const eventPageCommentsSlice = createSlice({
    name: 'eventPageCommentsSlice',
    initialState: commentsAdapter.getInitialState<EventPageCommentsSchema>({
        isLoading: false,
        entities: {},
        ids: []
    }),
    reducers:{},
    extraReducers: builder => {
        builder.addCase(fetchGetCommentsByEventId.fulfilled, (state, action) => {
            commentsAdapter.setAll(state, action.payload);
        })
        builder.addCase(fetchDeleteMyCommentById.fulfilled, (state, {payload}: PayloadAction<number>) => {
            commentsAdapter.removeOne(state, payload);
        })
    }
});

export const {
    reducer: eventPageCommentsReducer
} = eventPageCommentsSlice;
