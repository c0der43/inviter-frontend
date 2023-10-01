import {createAsyncThunk} from "@reduxjs/toolkit";
import {IEvent} from "@/entities/Event";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {getPageSelector} from "@/pages/MainPage/model/selectors/mainPageSelectors/getPageSelector/getPageSelector.ts";
import {
    getLimitSelector
} from "@/pages/MainPage/model/selectors/mainPageSelectors/getLimitSelector/getLimitSelector.ts";
import {mainPageActions} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";

export const fetchGetEventsWithPagination = createAsyncThunk<IEvent[], void, ThunkConfig<string>>(
    'main/fetchGetEvents',
    async (_, thunkAPI) => {

        const {
            extra,
            rejectWithValue,
            getState,
            dispatch
        } = thunkAPI;

        const page = getPageSelector(getState());
        const limit = getLimitSelector(getState());

        dispatch(mainPageActions.updatePage());


        try {
            const {data} = await extra.api.get(`/event/pagination?page=${page}&limit=${limit}`);
            return data;
        }catch (e){
            console.log(e);
            return rejectWithValue('error');
        }
    }
);
