import {FC, memo} from "react";
import {AppDropdownMenu} from "@/shared/ui/AppDropdownMenu";
import {EventComment} from "@/entities/Comment/model/types/Comment.ts";
import classNames from "classnames";
import styles from './CommentDropdown.module.scss';

const options = [
    {value: EventComment.DELETE, content: EventComment.DELETE}
];

interface CommentDropdownProps {
    className?: string;
    onClickEvent?: (event: EventComment) => void;
}
export const CommentDropdown: FC<CommentDropdownProps> = memo((props) => {

    const {
        onClickEvent,
        className
    } = props;

    const onClickCommentEvent = (event: EventComment) => {
        onClickEvent?.(event);
    };

    return <>
        <AppDropdownMenu
            onClickItem={onClickCommentEvent}
            items={options}
            className={classNames(styles.CommentDropdown, className)}/>
    </>

});
