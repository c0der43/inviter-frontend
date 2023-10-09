import {FC, ReactNode, useEffect} from "react";
import {
    ReducerList,
    ReduxStoreWithManager,
    StateSchemaKey
} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {useDispatch, useStore} from "react-redux";


interface AsyncReducersModule {
    reducers: ReducerList,
    children?: ReactNode;
    removeAfterUnmount?: boolean;
}
export const AsyncReducersModule: FC<AsyncReducersModule> = (props) => {

    const {
        removeAfterUnmount = true,
        reducers,
        children
    } = props;

    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });

        return () => {
            if(removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({type: `@DESTROY ${name} reducer`});
                });
            }
        };
    },[removeAfterUnmount, dispatch, reducers, store.reducerManager]);

    return <>{children}</>
}
