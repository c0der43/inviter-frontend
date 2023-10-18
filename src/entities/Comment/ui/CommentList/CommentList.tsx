import {FC, memo} from "react";
import {Comment} from "@/entities/Comment/model/types/Comment.ts";
import {CommentItem} from "@/entities/Comment/ui/CommentItem/CommentItem.tsx";
import styles from './CommentList.module.scss';
import classNames from "classnames";

interface CommentListProps {
    comments?: Comment[];
    className?: string;
    onDeleteComment?: (commentId: number) => void;
}
export const CommentList: FC<CommentListProps> = memo((props) => {

    const {
        onDeleteComment,
        className,
        comments
    } = props;

    const onDeleteCommentHandler = (commentId: number) => {
        onDeleteComment?.(commentId);
    }

    return <>
        <div className={classNames(styles.CommentList, className)}>
            {
                comments?.map(comment => <CommentItem
                    onClickDeleteComment={onDeleteCommentHandler}
                    comment={comment}/>)
            }
        </div>
    </>
});
