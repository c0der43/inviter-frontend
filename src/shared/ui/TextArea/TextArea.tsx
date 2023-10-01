import {ChangeEvent, FC, memo, TextareaHTMLAttributes} from "react";
import {Text} from "@/shared/ui/Text";
import classNames from "classnames";
import styles from './TextArea.module.scss';

type ReqTextAreaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange'>
type TextAreaStyle = 'normal' | 'outline';

interface TextAreaProps extends ReqTextAreaProps{
    className?: string;
    label?: string;
    value?: string;
    onChange?: (value: string) => void;
    taStyle?: TextAreaStyle;
}
export const TextArea: FC<TextAreaProps> = memo((props) => {

    const {
        taStyle = 'normal',
        value,
        className,
        label,
        onChange,
        ...other
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e.target.value);
    }

    const textArea = <textarea
        onChange={onChangeHandler}
        value={value}
        className={classNames(styles.TextArea, className, styles[taStyle])}
        {...other}
    />

    if(label){
        return <div className={styles.TextAreaWithWrapper}>
            <Text text={label}/>
            {textArea}
        </div>
    }

    return textArea;
});
