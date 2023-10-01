import {CombinedState, configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import {StateSchema, ThunkExtraArg} from "../config/StateSchema.ts";
import {uiReducer} from "@/features/UI";
import {createReducerManager} from "@/app/providers/StoreProvider/config/reducerManager.ts";
import {$api} from "@/shared/api/api.ts";
import {userReducer} from "@/entities/User/model/slice/userSlice.ts";

export function createAppStore(
){

    const reducers: ReducersMapObject<StateSchema> = {
        ui: uiReducer,
        me: userReducer,
    };

    const extraArg: ThunkExtraArg = {
      api: $api
    };

    const reducerManager = createReducerManager(reducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArg,
            }
        })
    });

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createAppStore>['dispatch'];
