import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "@/entities/User";
import {CreateEventCuratorsSchema} from "@/features/CreateNewEvent/model/types/createEventCuratorsSchema.ts";
import {StateSchema} from "@/app/providers/StoreProvider";
import {
    fetchGetCuratorByEmail
} from "@/features/CreateNewEvent/model/services/fetchGetCuratorByEmail/fetchGetCuratorByEmail.ts";

const curatorsAdapter = createEntityAdapter<User>({
    selectId: (user) => user.id
});

export const curatorsSelector = curatorsAdapter
    .getSelectors<StateSchema>((state) =>
        state.createEventForm?.curators || curatorsAdapter.getInitialState());

export const createEventCuratorsSlice = createSlice({
    name: 'createEventCuratorsSlice',
    initialState: curatorsAdapter.getInitialState<CreateEventCuratorsSchema>({
        isLoading: false,
        ids: [],
        entities: {},
        eventCurator: ''
    }),
    reducers: {
        setEventCurator: (state, {payload}: PayloadAction<string>) => {
            state.eventCurator = payload;
        },
        deleteCurator: (state, {payload}: PayloadAction<number>) => {
            curatorsAdapter.removeOne(state, payload);
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetCuratorByEmail.rejected, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchGetCuratorByEmail.fulfilled, (state, {payload}: PayloadAction<User>) => {
            if(payload){
                curatorsAdapter.setOne(state, payload);
            }
            state.isLoading = false;
        })
        builder.addCase(fetchGetCuratorByEmail.pending, (state) => {
            state.isLoading = false;
        })
    },
});

export const {
    reducer: createEventCuratorsReducer,
    actions: createEventCuratorActions
} = createEventCuratorsSlice;

