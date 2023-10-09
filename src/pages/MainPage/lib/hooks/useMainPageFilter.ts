import {useSelector} from "react-redux";
import {
    getMainSearchSelector
} from "@/pages/MainPage/model/selectors/mainPageSelectors/getMainSearchSelector/getMainSearchSelector.ts";
import {
    getMainViewSelector
} from "@/pages/MainPage/model/selectors/mainPageSelectors/getMainViewSelector/getMainViewSelector.ts";
import {useCallback} from "react";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {mainPageActions} from "@/pages/MainPage/model/slices/MainPageSlice/MainPageSlice.ts";
import {EventView} from "@/entities/Event";
import {useDebounce} from "@/shared/lib/hooks/useDebounce/useDebounce.ts";


import {
    fetchGetEventsWithPagination
} from "@/pages/MainPage/model/services/fetchGetEvents/fetchGetEventsWithPagination.ts";

export const useMainPageFilters = () => {

    const dispatch = useAppDispatch();

    const search = useSelector(getMainSearchSelector);
    const view = useSelector(getMainViewSelector);

    const fetchEventListByName = useCallback(() => {
        dispatch(fetchGetEventsWithPagination({replace: true}));
    }, [dispatch]);

    const debouncedFetchEventList = useDebounce(fetchEventListByName, 300);

    const onChangeView = useCallback((view: EventView) => {
        dispatch(mainPageActions.setView(view));
    }, [dispatch]);

    const onChangeSearch = useCallback((value: string) => {
        dispatch(mainPageActions.setSearch(value));
        debouncedFetchEventList();
    }, [dispatch, debouncedFetchEventList])

    return {
        view,
        search,
        onChangeView,
        onChangeSearch
    }
}
