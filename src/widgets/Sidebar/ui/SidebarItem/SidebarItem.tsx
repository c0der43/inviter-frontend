import {FC, useCallback, useContext} from "react";
import {SidebarItemType} from "@/widgets/Sidebar/model/types/SidebarItemType.ts";
import {AppLink} from "@/shared/ui/AppLink";
import styles from './SidebarItem.module.scss';
import {CurrentRouteTitle} from "@/shared/lib/context/CurrentRouteTitle.ts";


interface SidebarItemProps {
    item: SidebarItemType;
}
export const SidebarItem: FC<SidebarItemProps> = (props) => {

    const {
        setTitle
    } = useContext(CurrentRouteTitle);

    const {
        item
    } = props;

    const setNewTitle = useCallback(() => {
        setTitle?.(item.text);
    },[item])

    return <AppLink
        to={item.path}
        onClick={setNewTitle}
    >
        <span className={styles.item}>{item.text}</span>
    </AppLink>

}
