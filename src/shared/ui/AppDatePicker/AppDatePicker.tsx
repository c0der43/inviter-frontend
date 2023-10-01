import {FC, memo} from "react";
import {DatePicker, DatePickerProps} from "antd";
import {Text} from "@/shared/ui/Text";
import styles from './AppDatePicker.module.scss';
import classNames from "classnames";
import {Dayjs} from 'dayjs';


type ReqDatePickerProps = Omit<DatePickerProps, 'onChange' | 'value'>

interface AppDatePickerProps extends ReqDatePickerProps{
    className?: string;
    label?: string;
    value?: string;
    onChange?: (value: Dayjs | null, dateString: string) => void;
}

export const AppDatePicker: FC<AppDatePickerProps> = memo((props) => {

    const {
        onChange,
        label,
        className,
        ...other
    } = props;

    const onChangeHandler = (value: Dayjs | null, dateString: string) => {
        onChange?.(value, dateString);
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const datePicker = <DatePicker
        onChange={onChangeHandler}
        className={classNames(styles.AppDatePicker, className)}
        {...other}/>

    if(label){
        return <div className={classNames(styles.AppDatePickerWithWrapper, className)}>
            <Text text={label}/>
            {datePicker}
        </div>
    }

    return datePicker;
});
