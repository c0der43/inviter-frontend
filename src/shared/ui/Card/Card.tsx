import {FC, ReactNode} from "react";
import styles from './Card.module.scss';
import classNames from "classnames";
import {Text} from "@/shared/ui/Text";

interface CardProps{
    className?: string;
    children?: ReactNode;
    title?: string;
    dotted?: boolean;
}
export const Card: FC<CardProps> = (props) => {

    const {
        title,
        children,
        className,
        dotted,
    } = props;

    return <>
        <div className={classNames(styles.Card, className, {[styles.dotted]: dotted})}>
            {title && <Text title={title}/>}
            {children}
        </div>
    </>

}
