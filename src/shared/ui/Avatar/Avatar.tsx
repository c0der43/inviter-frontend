import {CSSProperties, FC, memo, ReactNode, useMemo} from "react";
import classNames from "classnames";
import styles from './Avatar.module.scss';
import {AppImage} from "@/shared/ui/Image";

type AvatarStyle = 'normal' | 'gradient';
interface AvatarProps {
    size?: number;
    className?: string;
    alt?: string;
    src?: string;
    design?: AvatarStyle;
    children?: ReactNode;
}
export const Avatar: FC<AvatarProps> = memo((props) => {

    const {
        children,
        design = 'normal',
        size = 50,
        className,
        alt,
        src
    } = props;

    const style = useMemo<CSSProperties>(() => ({
        width: size,
        height: size
    }), [size]);

    const fallback = <h1>Loading...</h1>;
    const errorFallback = <h1>ERROR</h1>;

    if(children){
        return <div
            style={style}
            className={classNames(styles.ChildrenContainer, className)}>
            {children}
        </div>
    }

    return <AppImage
        src={src}
        className={classNames(styles.Avatar, className, styles[design])}
        style={style}
        alt={alt}
        fallback={fallback}
        errorFallback={errorFallback}
    />
});
