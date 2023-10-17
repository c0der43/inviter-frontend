import {EntityState} from "@reduxjs/toolkit";
import {IEvent} from "@/entities/Event";

export interface MyEventPageSchema extends EntityState<IEvent>{
    isLoading: boolean;
}
