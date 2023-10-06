import {createEntityAdapter, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {EventView, IEvent} from "@/entities/Event";
import {MainPageSchema} from "@/pages/MainPage";
import {fetchGetEventsWithPagination} from "@/pages/MainPage/model/services/fetchGetEvents/fetchGetEventsWithPagination.ts";
import {StateSchema} from "@/app/providers/StoreProvider";


const mainPageAdapter = createEntityAdapter<IEvent>({
    selectId: (event) => event.id
});

export const mainPageSelectors = mainPageAdapter
    .getSelectors<StateSchema>((state) =>
        state?.mainPage || mainPageAdapter.getInitialState());

export const mainPageSlice = createSlice({
    name: 'mainPageSlice',
    initialState: mainPageAdapter.getInitialState<MainPageSchema>({
        isLoading: false,
        ids: [],
        entities: {},
        page: 1,
        limit: 3,
        hasMore: true,
        search: '',
        view: 'STRIPS',
    }),
    reducers: {
        updatePage: (state) => {
            state.page += 1;
        },
        setSearch: (state, {payload}: PayloadAction<string>) => {
            state.search = payload;
        },
        setView: (state, {payload}: PayloadAction<EventView>) => {
            state.view = payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGetEventsWithPagination.pending, (state) => {
          state.isLoading = true;
        })
        builder.addCase(fetchGetEventsWithPagination.fulfilled, (state, {payload}: PayloadAction<IEvent[]>) => {
            state.isLoading = false;
            state.hasMore = payload.length >= state.limit;
            mainPageAdapter.addMany(state, payload);
        })
        builder.addCase(fetchGetEventsWithPagination.rejected, (state) => {
            state.isLoading = false;
        })
    }
});

export const {
    reducer: mainPageReducer,
    actions: mainPageActions
} = mainPageSlice;
