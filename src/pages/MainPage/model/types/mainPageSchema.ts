import {EntityState} from "@reduxjs/toolkit";
import {IEvent} from "@/entities/Event";

export interface MainPageSchema extends EntityState<IEvent>{
    isLoading: boolean;
    page: number;
    limit: number;
    hasMore: boolean;
}
