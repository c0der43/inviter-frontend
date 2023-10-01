import {SidebarItemType} from '../types/SidebarItemType.ts';
import {getRouteLogin, getRouteMain, getRouteMyEvents} from "@/shared/const/router.ts";

export const getSidebarItems = () => {
    //auth
    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная'
        },
        {
            path: getRouteMyEvents(),
            text: 'Мои ивенты'
        },
        {
            path: getRouteLogin(),
            text: 'login'
        }
    ];

    return sidebarItemsList;
}
