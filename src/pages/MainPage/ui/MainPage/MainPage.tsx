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
import {MainPageFilters} from "@/pages/MainPage/ui/MainPageFilters/MainPageFilters.tsx";
import styles from './MainPage.module.scss';
import {useSelector} from "react-redux";
import {
    getMainViewSelector
} from "@/pages/MainPage/model/selectors/mainPageSelectors/getMainViewSelector/getMainViewSelector.ts";
import {useGetAllTagsQuery} from "@/entities/Tag/api/fetchTagApi.ts";
import {TagsView} from "@/shared/ui/TagsView";


const reducers: ReducerList = {
    mainPage: mainPageReducer
}

const MainPage: FC = memo(() => {

    const dispatch = useAppDispatch();

    const view = useSelector(getMainViewSelector);

    const {
        isLoading,
        data: tags,
        error
    } = useGetAllTagsQuery();


    useEffect(() => {
        //dispatch(uiActions.setVisibleNavbar(false));
        dispatch(fetchGetEventsWithPagination({}));

        return () => {
            //dispatch(uiActions.setVisibleNavbar(true));
        }
    }, [dispatch]);

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchGetNextEventsPage());
    }, [dispatch]);

    return <>
        <AsyncReducersModule reducers={reducers} removeAfterUnmount={false}>
            <Page onScrollEnd={onLoadNextPage}>
                <div className={styles.MainPage}>
                    <div className={styles.filters_and_results}>
                        <PointsViewMap
                            borderRadius={8}
                            className={styles.map_in_filter}/>
                        <MainPageFilters className={styles.filters}/>
                        <TagsView tags={tags ?? []} className={styles.tags_container}/>
                        <EventsList classNames={styles.items} view={view}/>
                    </div>

                    <div className={styles.map_container}>
                        <PointsViewMap
                            className={styles.map}/>
                    </div>
                </div>
            </Page>
        </AsyncReducersModule>
    </>
});

export default MainPage;
