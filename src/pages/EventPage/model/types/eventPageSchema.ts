import {EventPageDataSchema} from "@/pages/EventPage/model/types/eventPageDataSchema.ts";
import {EventPageCommentsSchema} from "@/pages/EventPage/model/types/eventPageCommentsSchema.ts";

export interface EventPageSchema {
    event: EventPageDataSchema;
    comments: EventPageCommentsSchema;
}
