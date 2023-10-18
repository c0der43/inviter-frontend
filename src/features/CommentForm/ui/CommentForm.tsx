import {ChangeEvent, FC, memo, useCallback} from "react";
import styles from './CommentForm.module.scss';
import classNames from "classnames";
import {Avatar} from "@/shared/ui/Avatar";
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {commentFormActions, commentFormReducer} from "@/features/CommentForm/model/slices/commentFormSlice.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {Button} from "@/shared/ui/Button";
import {useSelector} from "react-redux";
import {
    getCommentFormTextSelector
} from "@/features/CommentForm/model/selectors/getCommentFormTextSelector/getCommentFormTextSelector.ts";


const reducers: ReducerList = {
    commentForm: commentFormReducer
}

interface CommentFormProps {
    className?: string;
    avatar?: string;
    onClickSendComment?: (text: string) => void;
}

const CommentForm: FC<CommentFormProps> = memo((props) => {

    const {
        onClickSendComment,
        avatar,
        className
    } = props;

    const dispatch = useAppDispatch();

    const text = useSelector(getCommentFormTextSelector);

    const onTextChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(commentFormActions.setText(e.target.value));
    } ,[dispatch]);

    const onSendComment = useCallback(() => {
        onClickSendComment?.(text);
        dispatch(commentFormActions.setText(''));
    }, [dispatch, onClickSendComment, text]);

    return <AsyncReducersModule reducers={reducers}>
        <div className={classNames(styles.CommentForm, className)}>
            <div className={styles.AvatarAndComment}>
                <Avatar src={avatar}/>
                <textarea
                    onChange={onTextChange}
                    className={styles.input}
                    placeholder={'Комментарий...'}/>
            </div>
            <Button onClick={onSendComment} className={styles.btn_form}>Отправить</Button>
        </div>
    </AsyncReducersModule>

});

export default CommentForm;
