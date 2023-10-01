import {CreateEventFieldsSchema} from "@/features/CreateNewEvent";
import {CreateEventTagsSchema} from "@/features/CreateNewEvent/model/types/CreateEventTagsSchema.ts";
import {CreateEventCuratorsSchema} from "@/features/CreateNewEvent/model/types/createEventCuratorsSchema.ts";

export interface CreateEventSchema {
    fields: CreateEventFieldsSchema,
    tags: CreateEventTagsSchema,
    curators: CreateEventCuratorsSchema
}
