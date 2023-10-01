import {CSSProperties, FC, memo, useMemo} from "react";
import styles from './Skeleton.module.scss';

interface SkeletonProps {
    height?: number | string;
    width?: number | string;
}
export const Skeleton: FC<SkeletonProps> = memo((props) => {

    const {
        height,
        width
    } = props;

    const style: CSSProperties = useMemo(() => ({
        height: height,
        width: width
    }), [height, width]);

    return <>
        <div className={styles.Skeleton} style={style}/>
    </>
});
