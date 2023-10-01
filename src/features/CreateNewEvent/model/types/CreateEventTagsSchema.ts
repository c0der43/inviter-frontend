import {Tag} from "@/entities/Tag";
import {EntityState} from "@reduxjs/toolkit";

export interface CreateEventTagsSchema extends EntityState<Tag>{
    tags: Tag[];
    isLoading: boolean;
    eventTag: string;
}
