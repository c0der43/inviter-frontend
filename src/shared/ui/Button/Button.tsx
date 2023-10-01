import {ButtonHTMLAttributes, FC, ReactNode} from "react";
import classNames from "classnames";
import styles from './Button.module.scss';


export type ButtonSize = 's' | 'm' | 'l';
export type ButtonStyle = 'normal' | 'outline' | 'neon' ;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    size?: ButtonSize;
    children?: ReactNode;
    design?: ButtonStyle;
}
export const Button: FC<ButtonProps> = (props) => {

    const {
        design = 'outline',
        children,
        className,
        size= 'm',
        ...other
    } = props;

    return <button
        className={classNames(className, styles.Button, [styles[size]], [styles[design]] )}
        {...other}>
        {children}
    </button>
}
