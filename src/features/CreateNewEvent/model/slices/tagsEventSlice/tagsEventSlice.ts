import {CreateEventTagsSchema} from "@/features/CreateNewEvent/model/types/CreateEventTagsSchema.ts";
import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchGetTagsByName} from "@/features/CreateNewEvent/model/services/getTagsByName/fetchGetTagsByName.ts";
import {Tag} from "@/entities/Tag";
import {StateSchema} from "@/app/providers/StoreProvider";


const tagsAdapter = createEntityAdapter<Tag>({
    selectId: (tag) => tag.id
})

export const getSelectedTags = tagsAdapter.getSelectors<StateSchema>(
    (state) => state.createEventForm?.tags || tagsAdapter.getInitialState()
);

export const tagsEventSlice = createSlice({
    name: 'tagsEventSlice',
    initialState: tagsAdapter.getInitialState<CreateEventTagsSchema>({
        isLoading: false,
        ids: [],
        tags: [],
        entities: {},
        eventTag: ''
    }),
    reducers: {
        setEventTag: (state, {payload}: PayloadAction<string>) => {
            state.eventTag = payload;
        },
        addTag: (state, {payload}: PayloadAction<Tag>) => {
            tagsAdapter.setOne(state, payload);
        },
        deleteTag: (state, {payload}: PayloadAction<number>) => {
            tagsAdapter.removeOne(state, payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetTagsByName.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchGetTagsByName.fulfilled, (state, {payload}: PayloadAction<Tag[]>) => {
            state.tags = payload;
            state.isLoading = false;
        })
        builder.addCase(fetchGetTagsByName.rejected, (state) => {
            state.tags = [];
            state.isLoading = false;
        })
    }
});
export const {
    reducer: tagsEventReducer,
    actions: tagsEventActions
} = tagsEventSlice;
