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

export const useMainPageFilters = () => {

    const dispatch = useAppDispatch();

    const search = useSelector(getMainSearchSelector);
    const view = useSelector(getMainViewSelector);

    const onChangeView = useCallback((view: EventView) => {
        dispatch(mainPageActions.setView(view));
    }, [dispatch]);

    const onChangeSearch = useCallback((value: string) => {
        dispatch(mainPageActions.setSearch(value));
    }, [dispatch])

    return {
        view,
        search,
        onChangeView,
        onChangeSearch
    }
}
