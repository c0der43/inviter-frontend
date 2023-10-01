import {User} from "@/entities/User";
import {EntityState} from "@reduxjs/toolkit";

export interface CreateEventCuratorsSchema extends EntityState<User>{
    isLoading: boolean,
    curators?: User[],
    eventCurator: string;
}
