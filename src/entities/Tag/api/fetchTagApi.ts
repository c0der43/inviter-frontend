import {rtkApi} from "@/shared/api/rtkApi.ts";
import {Tag} from "@/entities/Tag";

const tagsListApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getAllTags: build.query<Tag[], void>({
            query: () => ({
                url: '/tag/all'
            })
        })
    })
})

export const {useGetAllTagsQuery} = tagsListApi;
