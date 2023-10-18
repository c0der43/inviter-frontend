import {EntityState} from "@reduxjs/toolkit";
import {IEvent} from "@/entities/Event";

export interface MyEventsPageSchema extends EntityState<IEvent>{
    isLoading: boolean;
}
