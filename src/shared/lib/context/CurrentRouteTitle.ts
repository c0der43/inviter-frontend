import {createContext} from "react";


interface CurrentRouteNameContextProps {
    title?: string;
    setTitle?: (title: string) => void;
}
export const CurrentRouteTitle = createContext<CurrentRouteNameContextProps>({});
