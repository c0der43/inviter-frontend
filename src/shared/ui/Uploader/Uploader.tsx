import {ChangeEvent, FC, memo} from "react";
import classNames from "classnames";
import styles from './Uploader.module.scss';

interface UploaderProps {
    className?: string;
    onChangeChoiceFile?: (file: File) => void;
}
export const Uploader: FC<UploaderProps> = memo((props) => {

    const {
        onChangeChoiceFile,
        className
    } = props;

    const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.files != null && onChangeChoiceFile?.(e.target.files.item(0)!);
    }

    return <>
        <div className={classNames(styles.Uploader, className)}>
            <input
                type={'file'}
                accept={'image/*'}
                onChange={onChangeFile}
            />
        </div>
    </>

});
