import {FC, memo, useMemo} from "react";
import styles from './Siderbar.module.scss';
import {ProfileView} from "../ProfileView/ProfileView.tsx";
import {SidebarItem} from "../SidebarItem/SidebarItem.tsx";
import {getSidebarItems} from "@/widgets/Sidebar/model/selectors/getSidebarItems.ts";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import {useSelector} from "react-redux";
import {getUserDataSelector} from "@/entities/User/model/selectors/getUserDataSelector/getUserDataSelector.ts";

export const Sidebar: FC = memo(() => {

    const user = useSelector(getUserDataSelector);

    const sidebarItemsList =  getSidebarItems(user);

    const routeItemsList = useMemo(() =>
        sidebarItemsList.map((item) => <SidebarItem item={item} key={item.path}/>)
    , [sidebarItemsList]);

    return (
        <aside className={styles.Sidebar}>
            <div className={styles.content}>
                <ProfileView user={user}/>
                <div className={styles.items}>
                    {routeItemsList}
                </div>
                <ThemeSwitcher/>
            </div>
        </aside>
    );

});
