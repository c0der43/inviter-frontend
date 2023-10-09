import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {
    getMainHasMoreSelector
} from "@/pages/MainPage/model/selectors/mainPageSelectors/getMainHasMoreSelector/getMainHasMoreSelector.ts";
import {
    getMainIsLoadingSelector
} from "@/pages/MainPage/model/selectors/mainPageSelectors/getMainIsLoadingSelector/getMainIsLoadingSelector.ts";
import {mainPageActions} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";
import {
    fetchGetEventsWithPagination
} from "@/pages/MainPage/model/services/fetchGetEvents/fetchGetEventsWithPagination.ts";

export const fetchGetNextEventsPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'main/fetchGetNextPageEvents',
    async (_, thunkAPI) => {

        const {
            getState,
            dispatch,
        } = thunkAPI;

        const hasMore = getMainHasMoreSelector(getState());
        const isLoading = getMainIsLoadingSelector(getState());


        if(hasMore && !isLoading) {
            dispatch(mainPageActions.updatePage());
            dispatch(fetchGetEventsWithPagination());
        }
    }
);
