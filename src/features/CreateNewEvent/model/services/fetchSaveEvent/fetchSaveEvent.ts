import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkConfig} from "@/app/providers/StoreProvider";
import {EventDto} from "@/features/CreateNewEvent";
import {
    getEventFields
} from "@/features/CreateNewEvent/model/selectors/createEventSelectors/getEventFields/getEventFields.ts";
import {isAxiosError} from "axios";
import {getSelectedTags} from "@/features/CreateNewEvent/model/slices/tagsEventSlice/tagsEventSlice.ts";

export const fetchSaveEvent = createAsyncThunk<void, File | undefined, ThunkConfig<unknown>>(
    'createEvent/save',
    async (file, thunkAPI) => {

        const{
            extra,
            rejectWithValue,
            getState
        } = thunkAPI;

        const values = getEventFields(getState());
        const tagIds = getSelectedTags.selectIds(getState()) as Array<number>;

        const dto: EventDto = {
            name: values?.eventName ?? '',
            desc: values?.eventDescription ?? '',
            date: values?.eventDate ?? '',
            time: values?.eventTime ?? '',
            duration: values?.eventDurationTime ?? '',
            locationName: values?.eventLocationName ?? '',
            locationLat: values?.eventChoiceLocation.lat.toString() ?? '',
            locationLng: values?.eventChoiceLocation.lng.toString() ?? '',
            tags: tagIds
        }

        const formData = new FormData();
        file && formData.append('file', file);
        Object.keys(dto).forEach((key) => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            formData.append(key, dto[key]);
        })

        try{
            await extra.api.post('/event/create', formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
        }catch (e: unknown) {
            if(isAxiosError(e) && e.response != undefined){
                return rejectWithValue(e.response.data.message);
            }
        }
    }
)
