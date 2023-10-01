import {ChangeEvent, FC, InputHTMLAttributes, memo, useState} from "react";
import classNames from "classnames";
import styles from './Input.module.scss';
import {Text} from "@/shared/ui/Text";
import {Button} from "@/shared/ui/Button";


type InputSize = 's' | 'm' | 'l';
type ReqInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'size'>;

interface InputProps extends ReqInputProps {
    className?: string;
    value?: string | number;
    size?: InputSize;
    onChange?: (value: string) => void;
    label?: string;
    btnName?: string;
    onClick?: () => void;
}
export const Input: FC<InputProps> = memo((props) => {

    const {
        onClick,
        btnName,
        label,
        onChange,
        size = 'm',
        value,
        className,
        ...other
    } = props;

    const [isFocused, setIsFocused] = useState<boolean>(false);
    //const inputRef = useRef<HTMLInputElement>(null);

    const onFocus = () => {
        setIsFocused(true);
    }

    const onBlur = () => {
        setIsFocused(false);
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    }

    const input = <div className={classNames(styles.InputWrapper, styles[size], {[styles.onFocus]: isFocused}, className)}>
        <input
            //ref={inputRef}
            className={styles.Input}
            value={value}
            onFocus={onFocus}
            onBlur={onBlur}
            onChange={onChangeHandler}
            {...other}
        />
        {btnName && <Button size={'s'} className={styles.btn} onClick={onClick}>{btnName}</Button>}
    </div>;

    if(label) {
        return <>
            <div className={styles.InputWithLabel}>
                <Text text={label}/>
                {input}
            </div>
        </>
    }

    return input;
});
