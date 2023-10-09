import {createAsyncThunk} from "@reduxjs/toolkit";
import {IEvent} from "@/entities/Event";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {
    getMainPageSelector
} from "@/pages/MainPage/model/selectors/mainPageSelectors/getMainPageSelector/getMainPageSelector.ts";
import {
    getMainLimitSelector
} from "@/pages/MainPage/model/selectors/mainPageSelectors/getMainLimitSelector/getMainLimitSelector.ts";

export const fetchGetEventsWithPagination = createAsyncThunk<IEvent[], void, ThunkConfig<string>>(
    'main/fetchGetEvents',
    async (_, thunkAPI) => {

        const {
            extra,
            rejectWithValue,
            getState,
        } = thunkAPI;

        const page = getMainPageSelector(getState());
        const limit = getMainLimitSelector(getState());

        try {
            const {data} = await extra.api.get(`/event/pagination?page=${page}&limit=${limit}`);
            return data;
        }catch (e){
            console.log(e);
            return rejectWithValue('error');
        }
    }
);
