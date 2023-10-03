import {CSSProperties, FC, memo, useMemo} from "react";
import styles from './Skeleton.module.scss';

interface SkeletonProps {
    height?: number | string;
    width?: number | string;
    borderRadius?: number | string;
}
export const Skeleton: FC<SkeletonProps> = memo((props) => {

    const {
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
        <div className={styles.Skeleton} style={style}/>
    </>
});
