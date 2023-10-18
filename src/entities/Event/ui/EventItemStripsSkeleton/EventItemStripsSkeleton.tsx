import {FC} from "react";
import styles from './EventItemStripsSkeleton.module.scss';
import {Skeleton} from "@/shared/ui/Skeleton";

export const EventItemStripsSkeleton: FC = () => {

    return <>
        <div className={styles.EventItemStripsSkeleton}>
            <Skeleton width={'35%'} height={'150px'}/>

            <div className={styles.data_container}>
                <Skeleton width={'50%'} height={'30px'}/>
                <Skeleton width={'80%'} height={'40px'}/>
                <Skeleton width={'80%'} height={'20px'}/>

                <Skeleton width={'35px'} height={'35px'} className={styles.heart_skeleton}/>
            </div>
        </div>
    </>

}
