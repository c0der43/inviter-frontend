import {FC, ReactNode} from "react";
import {Provider} from "react-redux";
import {createAppStore} from "@/app/providers/StoreProvider/config/store.ts";


interface StoreProviderProps {
    children: ReactNode;
}
export const StoreProvider: FC<StoreProviderProps> = (props) => {

    const {
        children
    } = props;

    const store = createAppStore();

    return <Provider store={store}>
        {children}
    </Provider>

}
