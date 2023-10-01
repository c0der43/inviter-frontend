import {FC, memo} from "react";
import styles from './EventItemSekeleton.module.scss';
import {Skeleton} from "@/shared/ui/Skeleton";
import {Card} from "@/shared/ui/Card";

export const EventItemSkeleton: FC = memo(() => {

    const skeletonContent = <>
            <Skeleton height={150} width={'100%'}/>
            <div className={styles.info_container}>
                <Skeleton width={'100%'} height={30}/>
                <Skeleton width={'100%'} height={70}/>
            </div>
            <div className={styles.btn_and_users}>
                <Skeleton width={'30%'} height={50}/>
                <Skeleton width={'50%'} height={50}/>
            </div>
    </>

    return <Card className={styles.Event}>
        {skeletonContent}
    </Card>;
});
