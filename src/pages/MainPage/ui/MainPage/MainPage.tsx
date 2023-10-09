import {FC, memo, useCallback, useEffect} from "react";
import {Page} from "@/widgets/Page";
import {EventsList} from "@/pages/MainPage/ui/EventsList/EventsList.tsx";
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {mainPageReducer} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {fetchGetNextEventsPage} from "@/pages/MainPage/model/services/fetchGetNextEventsPage/fetchGetNextEventsPage.ts";
import {
    fetchGetEventsWithPagination
} from "@/pages/MainPage/model/services/fetchGetEvents/fetchGetEventsWithPagination.ts";
import {PointsViewMap} from "@/pages/MainPage/ui/PointsViewMap/PointsViewMap.tsx";


const reducers: ReducerList = {
    mainPage: mainPageReducer
}

const MainPage: FC = memo(() => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGetEventsWithPagination())
    }, [dispatch]);

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchGetNextEventsPage());
    }, [dispatch]);

    return <>
        <AsyncReducersModule reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPage}>
                <PointsViewMap/>
                <EventsList/>
            </Page>
        </AsyncReducersModule>
    </>

});

export default MainPage;
