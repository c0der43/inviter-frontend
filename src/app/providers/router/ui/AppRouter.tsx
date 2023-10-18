import {FC, memo, Suspense, useCallback} from "react";
import {AppRoutesProps} from "@/shared/types/router.ts";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "@/app/providers/router/config/routeConfig.tsx";
import {ReqAuth} from "@/app/providers/router/ui/ReqAuth.tsx";

export const AppRouter: FC = memo(() => {

    const renderComponent = useCallback((route: AppRoutesProps) => {
        const element = <Suspense
            fallback={<h1>Bundle loading...</h1>}>
            {route.element}
        </Suspense>

        return <Route path={route.path} key={route.path} element={
            route?.authOnly ? <ReqAuth>{element}</ReqAuth> : element
        } />
    }, []);

    return <Routes>{Object.values(routeConfig).map(renderComponent)}</Routes>
});
