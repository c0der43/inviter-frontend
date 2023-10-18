import {FC, memo, Suspense, useCallback} from "react";
import {AppImage} from "@/shared/ui/Image";
import styles from "../EventInfoSection/EventInfoSection.module.scss";
import classNames from "classnames";
import {Card} from "@/shared/ui/Card";
import {Text} from "@/shared/ui/Text";
import {CommentForm} from "@/features/CommentForm";
import {IEvent} from "@/entities/Event";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {fetchAddComment} from "@/pages/EventPage/model/services/fetchAddComment/fetchAddComment.ts";
import {
    EventPageCommentListSection
} from "@/pages/EventPage/ui/EventPageCommentListSection/EventPageCommentListSection.tsx";
import { AiOutlineInfoCircle } from "react-icons/ai";
import {apiUrlWithUsersAvatar} from "@/shared/const/urlApi.ts";
import {useSelector} from "react-redux";
import {getUserAvatarSelector} from "@/entities/User/model/selectors/getUserAvatarSelector/getUserAvatarSelector.ts";

interface EventInfoSectionProps {
    className?: string;
    currentEvent?: IEvent;
    onVisibleInfoSectionHandler?: () => void;
}
export const EventInfoSection: FC<EventInfoSectionProps> = memo((props) => {

    const {
        onVisibleInfoSectionHandler,
        currentEvent,
        className
    } = props;

    const dispatch = useAppDispatch();

    const userAvatar = useSelector(getUserAvatarSelector);

    const onClickSendComment = useCallback((text: string) => {
        dispatch(fetchAddComment({eventId: currentEvent!.id, text}));
    }, [dispatch, currentEvent]);

    return <>
        <section className={classNames(styles.EventInfoSection, className)}>
            <AiOutlineInfoCircle
                className={styles.info_btn} onClick={onVisibleInfoSectionHandler}/>
            <AppImage
                className={styles.img}
                src={`http://localhost:5000/uploads_event/${currentEvent?.previewFile?.fileName}`}/>

            <Card>
                <Text title={currentEvent?.name}/>
            </Card>

            <Card title={'Описание'}>
                <Text text={currentEvent?.desc}/>
            </Card>

            <Card>
                <Suspense fallback={<h1>Loading...</h1>}>
                    <CommentForm
                        onClickSendComment={onClickSendComment}
                        avatar={`${apiUrlWithUsersAvatar}${userAvatar?.fileName}`}/>
                </Suspense>
            </Card>

            <EventPageCommentListSection eventId={currentEvent?.id+''}/>
        </section>
    </>
});
