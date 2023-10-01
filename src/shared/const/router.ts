export enum AppRoutes {
    MAIN = 'main',
    MY_EVENTS = 'my_events',
    LOGIN = 'login',
    EVENT_DETAILS = 'event_details'
}

export const getRouteMain = () => '/';
export const getRouteMyEvents = () => '/my_events';
export const getRouteLogin = () => '/login';

export const getRouteEventDetails = (id: string) => `/event/${id}`;
