import {UISchema} from "@/features/UI";
import {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {LoginSchema} from "@/features/LoginForm";
import {CommentFormSchema} from "@/features/CommentForm";
import {AxiosInstance} from "axios";
import {UserSchema} from "@/entities/User";
import {CreateEventSchema} from "@/features/CreateNewEvent/model/types";
import {MainPageSchema} from "@/pages/MainPage";
import {EventPageSchema} from "@/pages/EventPage/model/types/eventPageSchema.ts";
import {SettingsPageSchema} from "@/pages/SettingsPage/model/types/SettingsPageSchema.ts";
import {rtkApi} from "@/shared/api/rtkApi.ts";
import {MyEventsPageSchema} from "@/pages/MyEventsPage/model/types/myEventsPageSchema.ts";

export interface StateSchema {
    ui: UISchema;
    me: UserSchema;
    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    loginForm?: LoginSchema;
    createEventForm?: CreateEventSchema;
    commentForm?: CommentFormSchema;
    mainPage?: MainPageSchema;
    eventPage?: EventPageSchema;
    settingsPage?: SettingsPageSchema;
    myEventsPage?: MyEventsPageSchema;
}

export type ReducerList = {
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (
        state: StateSchema,
        action: AnyAction
    ) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T,
    extra: ThunkExtraArg,
    state: StateSchema;
}
