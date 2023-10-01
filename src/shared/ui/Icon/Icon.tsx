import styles from './Icon.module.scss';
import {FC, ImgHTMLAttributes, memo} from "react";
import classNames from "classnames";

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
    className?: string;
    link: string;
}
export const Icon: FC<IconProps> = memo((props) => {

    const {
        className,
        link,
        ...otherProps
    } = props;

    return <img src={link} {...otherProps} className={classNames(styles.Icon, className)} alt={''}/>
    ;

});
