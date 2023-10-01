import {FC, ReactNode, useEffect} from "react";
import styles from './AuthPage.module.scss';
import {uiActions} from "@/features/UI";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {AppImage} from "@/shared/ui/Image";

interface AuthPageProps {
    children: ReactNode;
}
export const AuthPage: FC<AuthPageProps> = (props) => {

    const {
        children
    } = props;

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(uiActions.setVisibleNavbar(false));
        dispatch(uiActions.setVisibleSidebar(false));

        return () => {
            dispatch(uiActions.setVisibleNavbar(true));
            dispatch(uiActions.setVisibleSidebar(true));
        }
    }, [dispatch]);

    return <>
        <main className={styles.AuthPage}>
            <AppImage
                src={'https://free4kwallpapers.com/uploads/originals/2020/06/13/beautiful-city*-wallpaper.jpg'}
                className={styles.img}
                alt={'none'}/>
            <div className={styles.authContent}>
                {children}
            </div>
        </main>
    </>

}
