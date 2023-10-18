import {FC, memo} from "react";
import {Input} from "@/shared/ui/Input";
import classNames from "classnames";
import styles from './MainPageFilters.module.scss';
import {Button} from "@/shared/ui/Button";
import { BsList, BsGrid } from "react-icons/bs";
import {useMainPageFilters} from "@/pages/MainPage/lib/hooks/useMainPageFilter.ts";
import {Text} from "@/shared/ui/Text";


interface MainPageFiltersProps{
    className?: string;
}
export const MainPageFilters: FC<MainPageFiltersProps> = memo((props) => {

    const {
        className
    } = props;

    const {
        view,
        search,
        onChangeView,
        onChangeSearch
    } = useMainPageFilters();

    return <>
        <div className={classNames(styles.MainPageFilters,className)}>
            {/*<div className={styles.filter_item}>*/}
            {/*    <AppDatePicker className={styles.picker} placeholder={'Дата ивента'}/>*/}
            {/*</div>*/}
            <Text title={'GG ивентов по миру!'} bold size={'l'}/>
            <Input
                onChange={onChangeSearch}
                design={'solid'}
                search
                value={search}
                size={'l'}/>

            <div className={styles.date_and_type_views}>
                <div>
                    <Button
                        size={'s'}
                        design={'normal'}
                        className={styles.btn}>сначала новые</Button>
                </div>
                {
                    view === 'CARD' ? <BsList
                            onClick={() => onChangeView('STRIPS')}
                            size={30}
                            className={styles.view}/> :
                        <BsGrid size={30}
                                onClick={() => onChangeView('CARD')}
                                className={styles.view}/>
                }
            </div>
        </div>
    </>

});
