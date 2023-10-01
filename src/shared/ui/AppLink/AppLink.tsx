import {FC, ReactNode} from "react";
import {LinkProps, NavLink} from "react-router-dom";
import classNames from "classnames";
import styles from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
}
export const AppLink: FC<AppLinkProps> = (props) => {

    const {
        className,
        children,
        to,
        ...other
    } = props;

    return <NavLink
        className={classNames(styles.AppLink, className)}
        {...other}
        to={to}>
        {children}
    </NavLink>
};
