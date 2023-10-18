import {SidebarItemType} from '../types/SidebarItemType.ts';
import {getRouteLogin, getRouteMain, getRouteMyEvents, getRouteSettings} from "@/shared/const/router.ts";
import {User} from "@/entities/User";

export const getSidebarItems = (user: User | undefined) => {

    const sidebarItemsList: SidebarItemType[] = [
        {
            path: getRouteMain(),
            text: 'Главная'
        },
        {
            path: getRouteLogin(),
            text: 'login'
        }
    ];

    if(user){
        sidebarItemsList.push(
            {
                path: getRouteMyEvents(),
                text: 'Мои ивенты'
            },
            {
                path: getRouteSettings(),
                text: 'Настройки'
            },
        );
    }

    return sidebarItemsList;
}
