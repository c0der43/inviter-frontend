import {FC, memo, useCallback} from "react";
import {CommentList} from "@/entities/Comment";
import {useSelector} from "react-redux";
import {getEventCommentsSelector} from "@/pages/EventPage/model/slices/eventPageCommentsSlice.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {
    fetchDeleteMyCommentById
} from "@/pages/EventPage/model/services/fetchDeleteMyCommentById/fetchDeleteMyCommentById.ts";

interface EventPageCommentListSectionProps {
    eventId: string
}
export const EventPageCommentListSection: FC<EventPageCommentListSectionProps> = memo((props) => {

    const {
        eventId
    } = props;

    const comments = useSelector(getEventCommentsSelector.selectAll);
    const dispatch = useAppDispatch();

    const onDeleteMyCommentById = useCallback((commentId: number) => {
        dispatch(fetchDeleteMyCommentById({commentId, eventId}));
    } ,[dispatch, eventId]);

    return <>
        <CommentList
            onDeleteComment={onDeleteMyCommentById}
            comments={comments}/>
    </>

});
