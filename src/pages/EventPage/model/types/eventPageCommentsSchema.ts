import {EntityState} from "@reduxjs/toolkit";
import {Comment} from "@/entities/Comment/model/types/Comment.ts";

export interface EventPageCommentsSchema extends EntityState<Comment>{
    isLoading: boolean,
}
