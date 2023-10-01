import {createAsyncThunk} from "@reduxjs/toolkit";
import {Tag} from "@/entities/Tag";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {getEventTag} from "@/features/CreateNewEvent/model/selectors/eventTagSelectors/getEventTag/getEventTag.ts";

export const fetchGetTagsByName = createAsyncThunk<
    Tag[],
    void,
    ThunkConfig<string>
>('createEvent/getTagsByName', async (_,thunkAPI) => {

    const {
        extra,
        rejectWithValue,
        getState
    } = thunkAPI;

    const inputTagValue = getEventTag(getState());

    try{
        const {data} = await extra.api.get<Tag[]>(`/tag/by?name=${inputTagValue}`);
        return data;
    }catch (e){
        console.log(e);
        return rejectWithValue('error');
    }
})
