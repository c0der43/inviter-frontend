import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {LOCAL_STORAGE_TOKEN} from "@/shared/const/localstorage.ts";

export const rtkApi = createApi({
    reducerPath: 'inviterAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000',
        prepareHeaders: headers => {
            const token = `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN) || ''}`;
            if(token){
                headers.set('Authorization', token);
            }
            return headers;
        }
    }),
    endpoints: () => ({}),
});
