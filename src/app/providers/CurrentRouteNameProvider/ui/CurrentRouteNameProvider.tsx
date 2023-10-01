import {FC, ReactNode, useState} from "react";
import {CurrentRouteTitle} from "@/shared/lib/context/CurrentRouteTitle.ts";

interface CurrentRouteTitleProviderProps {
    children: ReactNode;
}
export const CurrentRouteTitleProvider: FC<CurrentRouteTitleProviderProps> = (props) => {

    const {
        children
    } = props;

    const [title, setTitle] = useState<string>('Главная');

    return <CurrentRouteTitle.Provider value={{title, setTitle}}>
        {children}
    </CurrentRouteTitle.Provider>

}
