import {FC, memo} from "react";
import {Input} from "@/shared/ui/Input";
import classNames from "classnames";
import styles from './MainPageFilters.module.scss';
import {Button} from "@/shared/ui/Button";
import {AppDatePicker} from "@/shared/ui/AppDatePicker";
import { BsList, BsGrid } from "react-icons/bs";
import {useMainPageFilters} from "@/pages/MainPage/lib/hooks/useMainPageFilter.ts";


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
            <div className={styles.filter_item}>
                <AppDatePicker className={styles.picker} placeholder={'Дата ивента'}/>
            </div>
            <Input
                onChange={onChangeSearch}
                design={'solid'}
                search
                value={search}
                size={'l'}/>

            {/*ВЫНЕСТИ ЭТО В ОТДЕЛЬНЫЙ КОМПОНЕНТ*/}
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
