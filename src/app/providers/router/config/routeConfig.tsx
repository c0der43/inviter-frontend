import {
    AppRoutes,
    getRouteEventDetails,
    getRouteLogin,
    getRouteMain,
    getRouteMyEvents,
    getRouteSettings
} from "@/shared/const/router.ts";
import {AppRoutesProps} from "@/shared/types/router.ts";
import {MainPage} from "@/pages/MainPage";
import {MyEventsPage} from "@/pages/MyEventsPage";
import {LoginPage} from "@/pages/Login";
import {EventPage} from "@/pages/EventPage";
import {SettingsPage} from "@/pages/SettingsPage";

export const routeConfig: Record<AppRoutes, AppRoutesProps>  = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage/>
    },
    [AppRoutes.MY_EVENTS]: {
        path: getRouteMyEvents(),
        element: <MyEventsPage/>
    },
    [AppRoutes.LOGIN]: {
        path: getRouteLogin(),
        element: <LoginPage/>
    },
    [AppRoutes.EVENT_DETAILS]: {
        path: getRouteEventDetails(':id'),
        element: <EventPage/>
    },
    [AppRoutes.SETTINGS]: {
        path: getRouteSettings(),
        element: <SettingsPage/>
    }
}
