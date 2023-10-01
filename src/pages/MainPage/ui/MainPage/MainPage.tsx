import {FC, memo, useCallback, useEffect} from "react";
import {Page} from "@/widgets/Page";
import {EventsList} from "@/pages/MainPage/ui/EventsList/EventsList.tsx";
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {mainPageReducer} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";
import {
    fetchGetEventsWithPagination
} from "@/pages/MainPage/model/services/fetchGetEvents/fetchGetEventsWithPagination.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";


const reducers: ReducerList = {
    mainPage: mainPageReducer
}

const MainPage: FC = memo(() => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchGetEventsWithPagination());
    }, [dispatch]);

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchGetEventsWithPagination());
    }, [dispatch]);

    return <>
        <AsyncReducersModule reducers={reducers}>
            <Page onScrollEnd={onLoadNextPage}>
                <EventsList/>
            </Page>
        </AsyncReducersModule>
    </>

});

export default MainPage;
