import {FC, memo, useCallback, useContext, useState} from "react";
import styles from './PageHeader.module.scss';
import {CurrentRouteTitle} from "@/shared/lib/context/CurrentRouteTitle.ts";
import {Text} from "@/shared/ui/Text";
import {CreateNewEventModal} from "@/features/CreateNewEvent";

export const PageHeader: FC = memo(() => {

    const {
        title,
    } = useContext(CurrentRouteTitle);

    const [isShowModal, setIsShowModal] = useState<boolean>(false);

    const clickShowModal = useCallback(() => {
        setIsShowModal(true);
    },[]);

    const onCloseModal = useCallback(() => {
        setIsShowModal(false)
    }, []);

    return (
        <div className={styles.PageHeader}>
            <Text title={title} bold={true}/>
            <button onClick={clickShowModal}>add</button>
            {isShowModal && <CreateNewEventModal isOpen={isShowModal} onClose={onCloseModal}/>}
        </div>
    );

});
