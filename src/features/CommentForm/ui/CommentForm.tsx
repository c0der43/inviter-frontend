import {ChangeEvent, FC, memo, useCallback} from "react";
import styles from './CommentForm.module.scss';
import classNames from "classnames";
import {Avatar} from "@/shared/ui/Avatar";
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {commentFormActions, commentFormReducer} from "@/features/CommentForm/model/slices/commentFormSlice.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";


const reducers: ReducerList = {
    commentForm: commentFormReducer
}

interface CommentFormProps {
    className?: string;
    avatar?: string;
}

const CommentForm: FC<CommentFormProps> = memo((props) => {

    const {
        avatar,
        className
    } = props;

    const dispatch = useAppDispatch();

    const onTextChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(commentFormActions.setText(e.target.value));
    } ,[dispatch]);

    return <AsyncReducersModule reducers={reducers}>
        <div className={classNames(styles.CommentForm, className)}>
            <div className={styles.AvatarAndComment}>
                <Avatar src={avatar}/>
                <textarea
                    onChange={onTextChange}
                    className={styles.input}
                    placeholder={'Комментарий...'}/>
            </div>
        </div>
    </AsyncReducersModule>

});

export default CommentForm;
