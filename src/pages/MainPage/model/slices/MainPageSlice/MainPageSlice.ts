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
        builder.addCase(fetchGetEventsWithPagination.fulfilled, (state, action) => {
            state.isLoading = false;
            state.hasMore = action.payload.length >= state.limit;

            console.log(action.meta.arg.replace);

            if(action.meta.arg.replace){
                mainPageAdapter.setAll(state, action.payload);
                state.hasMore = true;
                state.page = 1;
            }else{
                mainPageAdapter.addMany(state, action.payload);
            }
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
