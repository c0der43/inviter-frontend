import {FC, memo, useMemo} from "react";
import styles from './AvatarGroup.module.scss';
import classNames from "classnames";
import {Avatar} from "@/shared/ui/Avatar";
interface AvatarGroupProps {
    urls: Array<string>;
    className?: string;
    size?: number;
    maxAvatars?: number;
}

export const AvatarGroup: FC<AvatarGroupProps> = memo((props) => {

    const {
        maxAvatars = 3,
        size = 50,
        urls,
        className
    } = props;

    const itemsRemaining = useMemo(() => {
        return urls.length - maxAvatars;
    } , [urls, maxAvatars]);

    return <>
        <div className={classNames(styles.AvatarGroup, className)}>
            {
                urls.slice(0, maxAvatars).map((url, index) =>
                    <Avatar
                        src={url}
                        key={index}
                        className={styles.avatar}
                        size={size}/>
                )
            }
            {
                itemsRemaining > 0 && <Avatar
                    className={styles.avatar}
                    size={size}
                    children={<>{itemsRemaining}+</>}/>
            }
        </div>
    </>

});
