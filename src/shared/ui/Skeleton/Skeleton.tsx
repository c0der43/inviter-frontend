import {CSSProperties, FC, memo, useMemo} from "react";
import styles from './Skeleton.module.scss';
import classNames from "classnames";

interface SkeletonProps {
    height?: number | string;
    width?: number | string;
    borderRadius?: number | string;
    className?: string;
}
export const Skeleton: FC<SkeletonProps> = memo((props) => {

    const {
        className,
        borderRadius = 8,
        height,
        width
    } = props;

    const style: CSSProperties = useMemo(() => ({
        height,
        width,
        borderRadius,
    }), [borderRadius, height, width]);

    return <>
        <div className={classNames(styles.Skeleton, className)} style={style}/>
    </>
});
