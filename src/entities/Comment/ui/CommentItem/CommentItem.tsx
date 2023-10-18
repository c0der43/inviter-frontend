import {FC, memo} from "react";
import styles from './CommentItem.module.scss';
import {Avatar} from "@/shared/ui/Avatar";
import {Comment, EventComment} from "@/entities/Comment/model/types/Comment.ts";
import {Text} from "@/shared/ui/Text";
import {CommentDropdown} from "@/entities/Comment/ui/CommentDropdown/CommentDropdown.tsx";
import {apiUrlWithUsersAvatar} from "@/shared/const/urlApi.ts";

interface CommentItemProps {
    comment: Comment;
    onClickDeleteComment?: (commentId: number) => void
}
export const CommentItem: FC<CommentItemProps> = memo((props) => {

    const {
        onClickDeleteComment,
        comment
    } = props;


    const onClickEventHandler = (value: EventComment) => {
        value == EventComment.DELETE && onClickDeleteComment?.(comment.id)
    };

    return <>
        <div className={styles.CommentItem}>
            <Avatar src={`${apiUrlWithUsersAvatar}${comment?.user?.avatar?.fileName}`}/>
            <div className={styles.comment_body}>
                <div className={styles.header}>
                    <Text size={'s'} text={`${comment?.user?.firstName} ${comment?.user.lastName}`}/>
                    <Text text={comment?.create_at} size={'s'}/>
                </div>

                <Text text={comment?.text}/>
            </div>
            <CommentDropdown
                onClickEvent={onClickEventHandler}
                className={styles.settings_comment}/>
        </div>
    </>

});
